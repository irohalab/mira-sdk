# FavoriteAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkFavorite**](FavoriteAPI.md#checkfavorite) | **POST** /favorite/check/{bangumiId} | Check whether a Bangumi is favorited
[**createOrUpdateFavorite**](FavoriteAPI.md#createorupdatefavorite) | **POST** /favorite | Create or update a favorite for a Bangumi
[**deleteFavorite**](FavoriteAPI.md#deletefavorite) | **DELETE** /favorite/{id} | Delete a favorite
[**listFavorites**](FavoriteAPI.md#listfavorites) | **GET** /favorite | List favorites by status
[**replaceFavoriteEpisodeProgress**](FavoriteAPI.md#replacefavoriteepisodeprogress) | **POST** /favorite/progress | Replace watched episode progress from upstream favorites
[**syncFavorites**](FavoriteAPI.md#syncfavorites) | **POST** /favorite/sync | Synchronize all local favorites with the upstream service
[**updateFavoriteStatus**](FavoriteAPI.md#updatefavoritestatus) | **PUT** /favorite/{id} | Update a favorite&#39;s status


# **checkFavorite**
```swift
    open class func checkFavorite(bangumiId: UUID, completion: @escaping (_ data: FavoriteCheckResponse?, _ error: Error?) -> Void)
```

Check whether a Bangumi is favorited

Refreshes the favorite's check time when it exists.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MiraStreamingSDK

let bangumiId = 987 // UUID | 

// Check whether a Bangumi is favorited
FavoriteAPI.checkFavorite(bangumiId: bangumiId) { (response, error) in
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
 **bangumiId** | **UUID** |  | 

### Return type

[**FavoriteCheckResponse**](FavoriteCheckResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createOrUpdateFavorite**
```swift
    open class func createOrUpdateFavorite(favoriteCreateRequest: FavoriteCreateRequest, completion: @escaping (_ data: FavoriteWithReview?, _ error: Error?) -> Void)
```

Create or update a favorite for a Bangumi

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MiraStreamingSDK

let favoriteCreateRequest = FavoriteCreateRequest(status: FavoriteStatus(), bangumiId: 123, review: "review_example", rating: 123, syncToUpstream: false) // FavoriteCreateRequest | 

// Create or update a favorite for a Bangumi
FavoriteAPI.createOrUpdateFavorite(favoriteCreateRequest: favoriteCreateRequest) { (response, error) in
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
 **favoriteCreateRequest** | [**FavoriteCreateRequest**](FavoriteCreateRequest.md) |  | 

### Return type

[**FavoriteWithReview**](FavoriteWithReview.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFavorite**
```swift
    open class func deleteFavorite(id: UUID, syncToUpstream: Bool? = nil, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```

Delete a favorite

The current implementation attempts upstream deletion only when `syncToUpstream=false`; omitting the parameter deletes locally only.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MiraStreamingSDK

let id = 987 // UUID | 
let syncToUpstream = true // Bool | Explicitly set to false to trigger the implementation's upstream deletion path. (optional)

// Delete a favorite
FavoriteAPI.deleteFavorite(id: id, syncToUpstream: syncToUpstream) { (response, error) in
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
 **syncToUpstream** | **Bool** | Explicitly set to false to trigger the implementation&#39;s upstream deletion path. | [optional] 

### Return type

Void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listFavorites**
```swift
    open class func listFavorites(status: FavoriteStatus, enableEpsUpdateTime: Bool? = nil, countUnwatched: Bool? = nil, coverImage: Bool? = nil, offset: Int? = nil, limit: Int? = nil, orderBy: OrderBy_listFavorites? = nil, sort: Sort_listFavorites? = nil, completion: @escaping (_ data: PaginatedFavorite?, _ error: Error?) -> Void)
```

List favorites by status

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MiraStreamingSDK

let status = FavoriteStatus() // FavoriteStatus | 
let enableEpsUpdateTime = true // Bool | Include the latest episode update time when available. (optional) (default to false)
let countUnwatched = true // Bool | Include each favorite's unwatched episode count. (optional) (default to false)
let coverImage = true // Bool | Populate nested Bangumi cover images. (optional) (default to false)
let offset = 987 // Int |  (optional) (default to 0)
let limit = 987 // Int | `-1` means no limit; other values outside 0 through 300 also fall back to no limit. (optional) (default to -1)
let orderBy = "orderBy_example" // String |  (optional)
let sort = "sort_example" // String |  (optional)

// List favorites by status
FavoriteAPI.listFavorites(status: status, enableEpsUpdateTime: enableEpsUpdateTime, countUnwatched: countUnwatched, coverImage: coverImage, offset: offset, limit: limit, orderBy: orderBy, sort: sort) { (response, error) in
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
 **status** | [**FavoriteStatus**](.md) |  | 
 **enableEpsUpdateTime** | **Bool** | Include the latest episode update time when available. | [optional] [default to false]
 **countUnwatched** | **Bool** | Include each favorite&#39;s unwatched episode count. | [optional] [default to false]
 **coverImage** | **Bool** | Populate nested Bangumi cover images. | [optional] [default to false]
 **offset** | **Int** |  | [optional] [default to 0]
 **limit** | **Int** | &#x60;-1&#x60; means no limit; other values outside 0 through 300 also fall back to no limit. | [optional] [default to -1]
 **orderBy** | **String** |  | [optional] 
 **sort** | **String** |  | [optional] 

### Return type

[**PaginatedFavorite**](PaginatedFavorite.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceFavoriteEpisodeProgress**
```swift
    open class func replaceFavoriteEpisodeProgress(favoriteProgressRequest: FavoriteProgressRequest, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```

Replace watched episode progress from upstream favorites

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MiraStreamingSDK

let favoriteProgressRequest = FavoriteProgressRequest(subItemFavorites: [SubItemFavorite(id: 123, subItem: IdReference(id: 123))], bangumiId: 123) // FavoriteProgressRequest | 

// Replace watched episode progress from upstream favorites
FavoriteAPI.replaceFavoriteEpisodeProgress(favoriteProgressRequest: favoriteProgressRequest) { (response, error) in
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
 **favoriteProgressRequest** | [**FavoriteProgressRequest**](FavoriteProgressRequest.md) |  | 

### Return type

Void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **syncFavorites**
```swift
    open class func syncFavorites(overrideOnConflict: Bool? = nil, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```

Synchronize all local favorites with the upstream service

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MiraStreamingSDK

let overrideOnConflict = true // Bool | Keep local values when local and upstream favorites conflict. (optional) (default to false)

// Synchronize all local favorites with the upstream service
FavoriteAPI.syncFavorites(overrideOnConflict: overrideOnConflict) { (response, error) in
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
 **overrideOnConflict** | **Bool** | Keep local values when local and upstream favorites conflict. | [optional] [default to false]

### Return type

Void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFavoriteStatus**
```swift
    open class func updateFavoriteStatus(id: UUID, status: FavoriteStatus, syncToUpstream: Bool? = nil, completion: @escaping (_ data: FavoriteSummary?, _ error: Error?) -> Void)
```

Update a favorite's status

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MiraStreamingSDK

let id = 987 // UUID | 
let status = FavoriteStatus() // FavoriteStatus | 
let syncToUpstream = true // Bool | Set to false to skip synchronization with the upstream Mira service. (optional) (default to true)

// Update a favorite's status
FavoriteAPI.updateFavoriteStatus(id: id, status: status, syncToUpstream: syncToUpstream) { (response, error) in
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
 **status** | [**FavoriteStatus**](.md) |  | 
 **syncToUpstream** | **Bool** | Set to false to skip synchronization with the upstream Mira service. | [optional] [default to true]

### Return type

[**FavoriteSummary**](FavoriteSummary.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

