# EpisodeAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEpisode**](EpisodeAPI.md#getepisode) | **GET** /episode/{id} | Get an episode and its playable video files
[**listWatchHistory**](EpisodeAPI.md#listwatchhistory) | **GET** /episode/watch/history | List watch history
[**submitEpisodeFeedback**](EpisodeAPI.md#submitepisodefeedback) | **POST** /episode/feedback/{episodeId} | Submit feedback for an episode
[**syncWatchProgress**](EpisodeAPI.md#syncwatchprogress) | **POST** /episode/watch/sync | Synchronize a batch of watch-history records
[**updateWatchProgress**](EpisodeAPI.md#updatewatchprogress) | **POST** /episode/watch | Create or update watch progress


# **getEpisode**
```swift
    open class func getEpisode(id: UUID, loadBangumiEpisodes: Bool? = nil, loadFavorite: Bool? = nil, completion: @escaping (_ data: EpisodeDetail?, _ error: Error?) -> Void)
```

Get an episode and its playable video files

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let id = 987 // UUID | 
let loadBangumiEpisodes = true // Bool | Include the other episodes belonging to the same Bangumi. (optional) (default to false)
let loadFavorite = true // Bool | Include the current account's favorite on the nested Bangumi when one exists. (optional) (default to false)

// Get an episode and its playable video files
EpisodeAPI.getEpisode(id: id, loadBangumiEpisodes: loadBangumiEpisodes, loadFavorite: loadFavorite) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID** |  | 
 **loadBangumiEpisodes** | **Bool** | Include the other episodes belonging to the same Bangumi. | [optional] [default to false]
 **loadFavorite** | **Bool** | Include the current account&#39;s favorite on the nested Bangumi when one exists. | [optional] [default to false]

### Return type

[**EpisodeDetail**](EpisodeDetail.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWatchHistory**
```swift
    open class func listWatchHistory(offset: Int? = nil, limit: Int? = nil, completion: @escaping (_ data: PaginatedWatchProgress?, _ error: Error?) -> Void)
```

List watch history

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let offset = 987 // Int |  (optional) (default to 0)
let limit = 987 // Int | Values outside 0 through 300 fall back to 20. (optional) (default to 20)

// List watch history
EpisodeAPI.listWatchHistory(offset: offset, limit: limit) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Int** |  | [optional] [default to 0]
 **limit** | **Int** | Values outside 0 through 300 fall back to 20. | [optional] [default to 20]

### Return type

[**PaginatedWatchProgress**](PaginatedWatchProgress.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitEpisodeFeedback**
```swift
    open class func submitEpisodeFeedback(episodeId: UUID, feedbackRequest: FeedbackRequest, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```

Submit feedback for an episode

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let episodeId = 987 // UUID | 
let feedbackRequest = FeedbackRequest(deviceType: "deviceType_example", os: "os_example", browser: BrowserInfo(name: "name_example", version: "version_example", majorVersion: "majorVersion_example", webview: false, chromium: false, webkit: false), userAgent: "userAgent_example", issue: "issue_example", videoId: 123) // FeedbackRequest | 

// Submit feedback for an episode
EpisodeAPI.submitEpisodeFeedback(episodeId: episodeId, feedbackRequest: feedbackRequest) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **episodeId** | **UUID** |  | 
 **feedbackRequest** | [**FeedbackRequest**](FeedbackRequest.md) |  | 

### Return type

Void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **syncWatchProgress**
```swift
    open class func syncWatchProgress(batchWatchProgressRequest: BatchWatchProgressRequest, syncToUpstream: Bool? = nil, completion: @escaping (_ data: BatchWatchProgressResponse?, _ error: Error?) -> Void)
```

Synchronize a batch of watch-history records

Invalid records are ignored. When no valid records remain, the current implementation returns 200 without a response body; normal success returns `changedFavorites`.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let batchWatchProgressRequest = BatchWatchProgressRequest(records: [WatchHistoryRecord(bangumiId: 123, episodeId: 123, lastWatchPosition: 123, lastWatchTime: Date(), percentage: 123, isFinished: false)]) // BatchWatchProgressRequest | 
let syncToUpstream = true // Bool | Set to false to skip synchronization with the upstream Mira service. (optional) (default to true)

// Synchronize a batch of watch-history records
EpisodeAPI.syncWatchProgress(batchWatchProgressRequest: batchWatchProgressRequest, syncToUpstream: syncToUpstream) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchWatchProgressRequest** | [**BatchWatchProgressRequest**](BatchWatchProgressRequest.md) |  | 
 **syncToUpstream** | **Bool** | Set to false to skip synchronization with the upstream Mira service. | [optional] [default to true]

### Return type

[**BatchWatchProgressResponse**](BatchWatchProgressResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWatchProgress**
```swift
    open class func updateWatchProgress(watchProgressUpdateRequest: WatchProgressUpdateRequest, syncToUpstream: Bool? = nil, completion: @escaping (_ data: WatchProgressSummary?, _ error: Error?) -> Void)
```

Create or update watch progress

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let watchProgressUpdateRequest = WatchProgressUpdateRequest(episode: IdReference(id: 123), bangumi: nil, watchStatus: WatchProgressStatus(), lastWatchPosition: 123, lastWatchTime: Date(), percentage: 123) // WatchProgressUpdateRequest | 
let syncToUpstream = true // Bool | Set to false to skip synchronization with the upstream Mira service. (optional) (default to true)

// Create or update watch progress
EpisodeAPI.updateWatchProgress(watchProgressUpdateRequest: watchProgressUpdateRequest, syncToUpstream: syncToUpstream) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **watchProgressUpdateRequest** | [**WatchProgressUpdateRequest**](WatchProgressUpdateRequest.md) |  | 
 **syncToUpstream** | **Bool** | Set to false to skip synchronization with the upstream Mira service. | [optional] [default to true]

### Return type

[**WatchProgressSummary**](WatchProgressSummary.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

