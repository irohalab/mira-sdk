# mira-sdk
SDK for project-mira

## Streaming iOS SDK

The Swift 6 streaming client is generated from `streaming-spec/openapi.yaml`.
Generated Swift sources are not committed to this repository; the
`Sync Streaming iOS SDK` workflow opens or updates a pull request in
[`irohalab/mira-streaming-ios-sdk`](https://github.com/irohalab/mira-streaming-ios-sdk).

Generate and build the package locally with Node.js 24, Java, and Swift 6:

```sh
npm ci
npm run streaming-sdk:swift6
swift build --package-path .generated/MiraStreamingSDK
```

The workflow requires an `IOS_SDK_SYNC_TOKEN` Actions secret with write access
to repository contents and pull requests in `mira-streaming-ios-sdk`.

## Streaming Kotlin SDK

The selected Android-compatible client is a Kotlin/JVM JAR generated from
`streaming-spec/openapi.yaml` with OpenAPI Generator 7.24.0. It uses Retrofit 2,
Kotlin serialization, coroutines, Java 11 bytecode, and Android API 26 as its
documented compatibility baseline. Generation and publishing run on JDK 17.

Generate, contract-test, and assemble the production SDK by supplying its final
Maven identity:

```sh
npm ci
MIRA_KOTLIN_GROUP_ID=com.your-verified-namespace \
MIRA_KOTLIN_ARTIFACT_ID=mira-streaming-kotlin-sdk \
MIRA_KOTLIN_PACKAGE_NAME=com.yourorg.mira.streaming \
MIRA_KOTLIN_VERSION="$(tr -d '[:space:]' < streaming-spec/kotlin-sdk-version.txt)" \
npm run streaming-sdk:kotlin:test
```

The command produces primary, sources, and Javadoc JARs under
`.generated/streaming-kotlin-jvm/build/libs/`. Empty arrays are invalid for the
two array branches of `ItemPropertyValue.value`.

Generate every historical evaluation candidate:

```sh
npm run streaming-sdk:kotlin:candidates
```

See the [Kotlin client evaluation](streaming-spec/kotlin-client-evaluation.md)
for the evidence behind the selection and the
[Kotlin SDK release guide](streaming-spec/kotlin-sdk-release.md) for downstream
repository and Maven Central setup.
