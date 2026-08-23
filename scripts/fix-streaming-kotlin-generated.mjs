import { access, chmod, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve(process.env.MIRA_KOTLIN_OUTPUT_DIR || "");
const groupId = process.env.MIRA_KOTLIN_GROUP_ID;
const artifactId = process.env.MIRA_KOTLIN_ARTIFACT_ID;
const packageName = process.env.MIRA_KOTLIN_PACKAGE_NAME;
const version = process.env.MIRA_KOTLIN_VERSION;

if (!outputDirectory || !groupId || !artifactId || !packageName || !version) {
  throw new Error("Missing generated Kotlin SDK path or production identity");
}

function replaceExactlyOnce(source, expected, replacement, fileName) {
  const firstIndex = source.indexOf(expected);

  if (firstIndex === -1 || source.indexOf(expected, firstIndex + 1) !== -1) {
    throw new Error(`Expected exactly one generated pattern in ${fileName}: ${expected}`);
  }

  return source.replace(expected, replacement);
}

function assertContains(source, expected, fileName) {
  if (!source.includes(expected)) {
    throw new Error(`Expected generated identity in ${fileName}: ${expected}`);
  }
}

const buildFile = path.join(outputDirectory, "build.gradle");
const settingsFile = path.join(outputDirectory, "settings.gradle");
const wrapperPropertiesFile = path.join(
  outputDirectory,
  "gradle",
  "wrapper",
  "gradle-wrapper.properties",
);
let buildSource = await readFile(buildFile, "utf8");
const settingsSource = await readFile(settingsFile, "utf8");
let wrapperPropertiesSource = await readFile(wrapperPropertiesFile, "utf8");

assertContains(buildSource, `group '${groupId}'`, "build.gradle");
assertContains(buildSource, `version '${version}'`, "build.gradle");
assertContains(buildSource, `            groupId = '${groupId}'`, "build.gradle");
assertContains(buildSource, `            artifactId = '${artifactId}'`, "build.gradle");
assertContains(
  settingsSource,
  `rootProject.name = '${artifactId}'`,
  "settings.gradle",
);
buildSource = replaceExactlyOnce(
  buildSource,
  "    gradleVersion = '8.14.3'",
  "    gradleVersion = '8.14.5'",
  "build.gradle",
);
wrapperPropertiesSource = replaceExactlyOnce(
  wrapperPropertiesSource,
  "gradle-8.14.3-all.zip",
  "gradle-8.14.5-all.zip",
  "gradle-wrapper.properties",
);
buildSource = replaceExactlyOnce(
  buildSource,
  "        classpath \"com.diffplug.spotless:spotless-plugin-gradle:$spotless_version\"",
  "        classpath \"com.diffplug.spotless:spotless-plugin-gradle:$spotless_version\"\n        classpath \"com.vanniktech.maven.publish:com.vanniktech.maven.publish.gradle.plugin:0.37.0\"",
  "build.gradle",
);
buildSource = replaceExactlyOnce(
  buildSource,
  "apply plugin: 'maven-publish'",
  "apply plugin: 'java-library'\napply plugin: 'maven-publish'\napply plugin: 'com.vanniktech.maven.publish'",
  "build.gradle",
);
buildSource = replaceExactlyOnce(
  buildSource,
  `dependencies {\n    implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk8:$kotlin_version"\n    implementation "org.jetbrains.kotlinx:kotlinx-coroutines-core:1.11.0"\n    implementation "org.jetbrains.kotlinx:kotlinx-serialization-json:1.11.0"\n    implementation "com.squareup.okhttp3:logging-interceptor:5.4.0"\n    implementation "com.squareup.retrofit2:retrofit:$retrofitVersion"\n    implementation "com.squareup.retrofit2:converter-kotlinx-serialization:$retrofitVersion"\n    implementation "com.squareup.retrofit2:converter-scalars:$retrofitVersion"\n    testImplementation "io.kotlintest:kotlintest-runner-junit5:3.4.2"\n}`,
  `dependencies {\n    api "org.jetbrains.kotlin:kotlin-stdlib-jdk8:$kotlin_version"\n    api "org.jetbrains.kotlinx:kotlinx-coroutines-core:1.11.0"\n    api "org.jetbrains.kotlinx:kotlinx-serialization-json:1.11.0"\n    api "com.squareup.okhttp3:logging-interceptor:5.4.0"\n    api "com.squareup.retrofit2:retrofit:$retrofitVersion"\n    api "com.squareup.retrofit2:converter-kotlinx-serialization:$retrofitVersion"\n    api "com.squareup.retrofit2:converter-scalars:$retrofitVersion"\n    testImplementation "io.kotlintest:kotlintest-runner-junit5:3.4.2"\n}`,
  "build.gradle",
);
buildSource = replaceExactlyOnce(
  buildSource,
  "java {\n    withSourcesJar()\n}",
  "java {\n    sourceCompatibility = JavaVersion.VERSION_11\n    targetCompatibility = JavaVersion.VERSION_11\n}\n\ntasks.withType(org.jetbrains.kotlin.gradle.tasks.KotlinCompile).configureEach {\n    compilerOptions {\n        jvmTarget = org.jetbrains.kotlin.gradle.dsl.JvmTarget.JVM_11\n    }\n}",
  "build.gradle",
);
buildSource = replaceExactlyOnce(
  buildSource,
  `publishing {\n    publications {\n        maven(MavenPublication) {\n            groupId = '${groupId}'\n            artifactId = '${artifactId}'\n            version = '${version}'\n            from components.java\n        }\n    }\n}`,
  `mavenPublishing {\n    publishToMavenCentral()\n    signAllPublications()\n    coordinates(group.toString(), project.name, version.toString())\n\n    pom {\n        name = 'Mira Streaming Kotlin SDK'\n        description = 'Kotlin/JVM client for the Project Mira streaming API'\n        url = 'https://github.com/irohalab/mira-streaming-kotlin-sdk'\n        licenses {\n            license {\n                name = 'The Apache License, Version 2.0'\n                url = 'https://www.apache.org/licenses/LICENSE-2.0.txt'\n                distribution = 'repo'\n            }\n        }\n        developers {\n            developer {\n                id = 'irohalab'\n                name = 'irohalab'\n                url = 'https://github.com/irohalab'\n            }\n        }\n        scm {\n            url = 'https://github.com/irohalab/mira-streaming-kotlin-sdk'\n            connection = 'scm:git:https://github.com/irohalab/mira-streaming-kotlin-sdk.git'\n            developerConnection = 'scm:git:ssh://git@github.com/irohalab/mira-streaming-kotlin-sdk.git'\n        }\n    }\n}`,
  "build.gradle",
);

await access(
  path.join(
    outputDirectory,
    "src",
    "main",
    "kotlin",
    ...packageName.split("."),
  ),
);
await writeFile(buildFile, buildSource);
await writeFile(wrapperPropertiesFile, wrapperPropertiesSource);
await chmod(path.join(outputDirectory, "gradlew"), 0o755);

console.log(`Configured ${groupId}:${artifactId}:${version} for Java 11`);