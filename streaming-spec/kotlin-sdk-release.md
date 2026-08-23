# Kotlin SDK release guide

The generated Kotlin/JVM SDK is synchronized by pull request to
`irohalab/mira-streaming-kotlin-sdk`. That downstream repository owns its tags,
Maven Central credentials, and final release approval.

## 1. Choose Maven identity

Verify a namespace in the [Central Portal](https://central.sonatype.com/), then
choose:

- `groupId`: a value under that verified namespace;
- `artifactId`: normally `mira-streaming-kotlin-sdk`; and
- Kotlin package: normally a Java-compatible package under the same domain.

The synchronization workflow rejects empty, malformed, and common placeholder
identities. Coordinates are immutable after a version is published.

## 2. Prepare the downstream repository

Create `irohalab/mira-streaming-kotlin-sdk` with default branch `master`, an
Apache-2.0 `LICENSE`, and this caller workflow at
`.github/workflows/release.yml`:

```yaml
name: Release

on:
  push:
    tags:
      - "v*"

jobs:
  publish:
    uses: irohalab/mira-sdk/.github/workflows/publish-streaming-kotlin-sdk.yml@master
    secrets: inherit
```

Pin the reusable workflow to a reviewed commit or release tag before the first
public release instead of permanently relying on `master`.

Add these downstream Actions secrets:

- `MAVEN_CENTRAL_USERNAME`: username from a Central Portal user token;
- `MAVEN_CENTRAL_PASSWORD`: password from that Portal user token;
- `SIGNING_IN_MEMORY_KEY`: complete ASCII-armored private PGP key;
- `SIGNING_IN_MEMORY_KEY_PASSWORD`: private-key passphrase.

Publish the corresponding public key to a Central-supported key server.

## 3. Synchronize generated sources

In this repository, add `KOTLIN_SDK_SYNC_TOKEN` as an Actions secret. It must be
able to push branches and open pull requests in the downstream repository.

Run the **Sync Streaming Kotlin SDK** workflow and supply the final `groupId`,
`artifactId`, and Kotlin package. The workflow reads the version from
`kotlin-sdk-version.txt`, validates the OpenAPI document, runs all contracts,
assembles the Maven artifacts, and opens or updates a downstream pull request.
It preserves the downstream `.github` directory and `LICENSE`, excludes Gradle
caches and build outputs, and replaces the remaining generated project files.

Review and merge the generated pull request before releasing.

## 4. Release 0.1.0

Confirm the downstream Gradle version is `0.1.0`, then create and push tag
`v0.1.0`. The downstream workflow:

1. verifies the tag matches the Gradle project version;
2. runs tests and builds the POM, sources JAR, and Javadoc JAR;
3. signs the publication; and
4. runs `publishToMavenCentral`.

The upload remains unpublished until a maintainer reviews the validated
deployment in the Central Portal and clicks **Publish**. Central artifacts are
immutable, so corrections require a new semantic version.

## Android consumption

The SDK is a resource-free Kotlin/JVM JAR. Android applications use
`mavenCentral()` and:

```kotlin
dependencies {
    implementation("your.group:mira-streaming-kotlin-sdk:0.1.0")
}
```

The published JAR targets Java 11. Android API 26 is the documented baseline,
which avoids requiring core-library desugaring for the generated `java.time`
models. Generation and publication require JDK 17. The generated project pins
Gradle 8.14.5 and Vanniktech Maven Publish Plugin 0.37.0.

The generated POM exposes Retrofit, OkHttp, coroutines, serialization, and
Kotlin dependencies at compile scope because generated public APIs reference
those types. This was verified by compiling an external Kotlin consumer with
only the SDK dependency declared.