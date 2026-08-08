# mira-sdk
SDK for project-mira

## Streaming iOS SDK

The Swift 6 streaming client is generated from `streaming-spec/openapi.yaml`.
Generated Swift sources are not committed to this repository; the
`Sync Streaming iOS SDK` workflow opens or updates a pull request in
[`irohalab/mira-streaming-ios-sdk`](https://github.com/irohalab/mira-streaming-ios-sdk).

Generate and build the package locally with Node.js 20, Java, and Swift 6:

```sh
npm ci
npm run streaming-sdk:swift6
swift build --package-path .generated/MiraStreamingSDK
```

The workflow requires an `IOS_SDK_SYNC_TOKEN` Actions secret with write access
to repository contents and pull requests in `mira-streaming-ios-sdk`.
