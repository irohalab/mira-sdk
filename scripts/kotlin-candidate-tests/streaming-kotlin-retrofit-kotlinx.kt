package org.openapitools.client

import com.sun.net.httpserver.HttpServer
import io.kotlintest.shouldBe
import io.kotlintest.shouldThrow
import io.kotlintest.specs.ShouldSpec
import java.net.InetSocketAddress
import java.net.URLDecoder
import java.nio.charset.StandardCharsets
import java.util.UUID
import java.util.concurrent.CompletableFuture
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import kotlinx.serialization.SerializationException
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import org.openapitools.client.apis.MessageApi
import org.openapitools.client.infrastructure.ApiClient
import org.openapitools.client.infrastructure.CollectionFormats.CSVParams
import org.openapitools.client.infrastructure.Serializer
import org.openapitools.client.models.EpisodeSummary
import org.openapitools.client.models.FavoriteCheckResponse
import org.openapitools.client.models.ItemPropertyValue
import org.openapitools.client.models.ItemPropertyValueValue

class StreamingContractTest : ShouldSpec() {
    init {
        should("round-trip every non-ambiguous item property value shape") {
            val fixtures = listOf(
                """{"value":"text","locked":false}""" to
                    ItemPropertyValueValue.StringValue::class,
                """{"value":["first","second"],"locked":false}""" to
                    ItemPropertyValueValue.ListStringValue::class,
                """{"value":[{"id":"one"},{"id":"two"}],"locked":false}""" to
                    ItemPropertyValueValue.ListMapStringStringValue::class,
            )

            fixtures.forEach { (fixture, expectedType) ->
                val decoded = Serializer.kotlinxSerializationJson
                    .decodeFromString<ItemPropertyValue>(fixture)

                decoded.`value`::class shouldBe expectedType

                val encoded = Serializer.kotlinxSerializationJson.encodeToString(decoded)
                Serializer.kotlinxSerializationJson
                    .decodeFromString<ItemPropertyValue>(encoded) shouldBe decoded
            }
        }

        should("decode both favorite check response shapes") {
            val found = Serializer.kotlinxSerializationJson
                .decodeFromString<FavoriteCheckResponse>(
                    """{"found":true,"checkTime":"2026-08-16T12:34:56Z"}""",
                )
            val notFound = Serializer.kotlinxSerializationJson
                .decodeFromString<FavoriteCheckResponse>("""{"found":false}""")

            (found is FavoriteCheckResponse.FavoriteCheckFoundValue) shouldBe true
            (notFound is FavoriteCheckResponse.FavoriteCheckNotFoundValue) shouldBe true
        }

        should("distinguish explicit null from an absent required nullable field") {
            val explicitNull =
                """{"id":"00000000-0000-0000-0000-000000000001","bgmEpsId":1,"episodeNo":1,"sort":1.0,"status":0,"watchProgress":null,"thumbnailImage":null}"""
            val absentWatchProgress =
                """{"id":"00000000-0000-0000-0000-000000000001","bgmEpsId":1,"episodeNo":1,"sort":1.0,"status":0,"thumbnailImage":null}"""

            val decoded = Serializer.kotlinxSerializationJson
                .decodeFromString<EpisodeSummary>(explicitNull)

            decoded.watchProgress shouldBe null
            decoded.thumbnailImage shouldBe null
            shouldThrow<SerializationException> {
                Serializer.kotlinxSerializationJson
                    .decodeFromString<EpisodeSummary>(absentWatchProgress)
            }
        }

        should("record the generated empty-array convention") {
            val decoded = Serializer.kotlinxSerializationJson
                .decodeFromString<ItemPropertyValue>(
                    """{"value":[],"locked":false}""",
                )

            (decoded.`value` is ItemPropertyValueValue.ListStringValue) shouldBe true
        }

        should("send bearer auth and one comma-separated query value") {
            val firstId = UUID.fromString("00000000-0000-0000-0000-000000000001")
            val secondId = UUID.fromString("00000000-0000-0000-0000-000000000002")
            val capturedRequest = CompletableFuture<CapturedRequest>()
            val executor = Executors.newSingleThreadExecutor()
            val server = HttpServer.create(InetSocketAddress("127.0.0.1", 0), 0)

            server.executor = executor
            server.createContext("/message") { exchange ->
                capturedRequest.complete(
                    CapturedRequest(
                        method = exchange.requestMethod,
                        authorization = exchange.requestHeaders.getFirst("Authorization"),
                        rawQuery = exchange.requestURI.rawQuery,
                    ),
                )
                exchange.sendResponseHeaders(200, -1)
                exchange.close()
            }
            server.start()

            try {
                val api = ApiClient(
                    baseUrl = "http://127.0.0.1:${server.address.port}/",
                    authName = "bearerAuth",
                    bearerToken = "test-token",
                ).createService(MessageApi::class.java)

                val response = api.deleteInboxMessages(
                    CSVParams(firstId.toString(), secondId.toString()),
                )
                val request = capturedRequest.get(2, TimeUnit.SECONDS)

                response.isSuccessful shouldBe true
                request.method shouldBe "DELETE"
                request.authorization shouldBe "Bearer test-token"
                request.rawQuery.contains("&") shouldBe false
                URLDecoder.decode(
                    request.rawQuery,
                    StandardCharsets.UTF_8.name(),
                ) shouldBe "ids=$firstId,$secondId"
            } finally {
                server.stop(0)
                executor.shutdownNow()
            }
        }
    }
}

private data class CapturedRequest(
    val method: String,
    val authorization: String?,
    val rawQuery: String,
)