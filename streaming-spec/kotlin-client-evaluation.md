# Kotlin client evaluation

This record compares clients generated from `openapi.yaml` with OpenAPI
Generator 7.24.0 and records the resulting production decision.

## Decision

- Publish a Kotlin/JVM JAR from `irohalab/mira-streaming-kotlin-sdk`.
- Generate with Retrofit 2, Kotlin serialization, and coroutines.
- Run generation, Gradle, and publishing on JDK 17 while targeting Java 11
  bytecode.
- Build the generated project with Gradle 8.14.5 and publish through Vanniktech
  Maven Publish Plugin 0.37.0.
- Document Android API 26 as the compatibility baseline.
- Start at version `0.1.0` and release from downstream tag `v0.1.0`.
- Upload initial releases for manual Central Portal approval.

The verified parent namespace is `io.iroha`; the selected group is
`io.iroha.mira`, artifact is `mira-streaming-kotlin-sdk`, and Kotlin package is
`io.iroha.mira.streaming`.

## Contract gates

A production candidate must:

- compile without editing generated model or runtime sources;
- preserve every non-ambiguous legal `ItemPropertyValue.value` shape;
- preserve both `FavoriteCheckResponse` shapes;
- distinguish explicit null from omission for required nullable `allOf` fields;
- serialize the inbox message IDs as one comma-separated query value;
- apply bearer authentication through a stable client hook; and
- accept successful responses with an empty body.

Both array branches now declare `minItems: 1`, so `{"value":[]}` is an invalid
server response. The generated serializer remains defensive and would decode a
malformed empty array as the string-list branch, but callers must not rely on
that fallback.

## Generator results

| Candidate | Generate | Compile | Contract result | Status |
| --- | --- | --- | --- | --- |
| Retrofit 2 + Kotlin serialization | Pass | Pass | All implemented JSON and HTTP gates pass. | Selected |
| Retrofit 2 + Gson | Pass | Fail | Generated code has integer/string comparison errors and an erased generic map type check. | Eliminated without a generator fix |
| OkHttp 4 + Moshi | Pass | Pass | The property union becomes an empty class and the favorite union becomes one model with required `checkTime`. | Eliminated without maintained adapters or a schema change |
| JVM Ktor + Jackson | Pass | Pass | The property union becomes an empty class and the favorite union becomes one model with required `checkTime`. | Eliminated without maintained adapters or a schema change |
| Multiplatform Ktor + Kotlin serialization | Pass | Not completed | Generated union models lose the legal branches and contain duplicate serialization annotations. The default build also adds JVM, JS, and three iOS targets. | Eliminated before target builds |

The full contract fixture for the currently viable candidate is
[`../scripts/kotlin-candidate-tests/streaming-kotlin-retrofit-kotlinx.kt`](../scripts/kotlin-candidate-tests/streaming-kotlin-retrofit-kotlinx.kt).
Other candidate fixtures are placeholders until a candidate passes its model
representation gate.

## Shared generator regression

- Angular output is unchanged apart from `.openapi-generator` metadata and the
  package build passes.
- Fetch output has one runtime change: multipart content types with parameters
  are now recognized. The package build passes.
- Swift generation and its fail-fast postprocessor pass. A Swift package build
  could not run because this Linux environment does not have the `swift` tool.

## Artifact observation

The production generator assembles primary, sources, and Javadoc JARs. Its
compiled classes use Java 11 bytecode (class-file major version 55). The
fail-fast postprocessor owns this setting because OpenAPI Generator does not
expose a Kotlin JVM-target option.

No Android SDK is installed in this environment. The Android consumer and AAR
comparison therefore remains a downstream CI task rather than a completed local
test.

## Reproduce

Generate every candidate:

```bash
npm run streaming-sdk:kotlin:candidates
```

Build the currently viable candidate and run its contract tests:

```bash
npm run streaming-sdk:kotlin:test:retrofit-kotlinx
```

Each generated project is disposable and remains under `.generated/`.
