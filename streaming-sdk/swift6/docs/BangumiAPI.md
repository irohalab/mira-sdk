# BangumiAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBangumi**](BangumiAPI.md#getbangumi) | **GET** /bangumi/{id} | Get a Bangumi and its episodes
[**getBangumiTimeline**](BangumiAPI.md#getbangumitimeline) | **GET** /bangumi/timeline | List Bangumi air dates
[**listBangumi**](BangumiAPI.md#listbangumi) | **GET** /bangumi | Search and list Bangumi
[**listOnAirBangumi**](BangumiAPI.md#listonairbangumi) | **GET** /bangumi/on-air | List Bangumi airing during the current month


# **getBangumi**
```swift
    open class func getBangumi(id: UUID, completion: @escaping (_ data: BangumiDetail?, _ error: Error?) -> Void)
```

Get a Bangumi and its episodes

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let id = 987 // UUID | 

// Get a Bangumi and its episodes
BangumiAPI.getBangumi(id: id) { (response, error) in
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

### Return type

[**BangumiDetail**](BangumiDetail.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBangumiTimeline**
```swift
    open class func getBangumiTimeline(type: ModelType_getBangumiTimeline? = nil, eps: Int? = nil, sort: Sort_getBangumiTimeline? = nil, completion: @escaping (_ data: TimelineResponse?, _ error: Error?) -> Void)
```

List Bangumi air dates

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let type = "type_example" // String | Omit to include all types. (optional)
let eps = 987 // Int | Exact episode-count filter. (optional)
let sort = "sort_example" // String |  (optional) (default to .desc)

// List Bangumi air dates
BangumiAPI.getBangumiTimeline(type: type, eps: eps, sort: sort) { (response, error) in
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
 **type** | **String** | Omit to include all types. | [optional] 
 **eps** | **Int** | Exact episode-count filter. | [optional] 
 **sort** | **String** |  | [optional] [default to .desc]

### Return type

[**TimelineResponse**](TimelineResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listBangumi**
```swift
    open class func listBangumi(type: ItemTypeQuery? = nil, subType: ItemSubTypeQuery? = nil, eps: Int? = nil, offset: Int? = nil, limit: Int? = nil, orderBy: OrderBy_listBangumi? = nil, sort: Sort_listBangumi? = nil, keyword: String? = nil, completion: @escaping (_ data: PaginatedBangumi?, _ error: Error?) -> Void)
```

Search and list Bangumi

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let type = ItemTypeQuery() // ItemTypeQuery | TypeScript enum key used by the controller. (optional)
let subType = ItemSubTypeQuery() // ItemSubTypeQuery | TypeScript enum key used by the controller. (optional)
let eps = 987 // Int | Exact episode-count filter. (optional)
let offset = 987 // Int |  (optional) (default to 0)
let limit = 987 // Int | Values outside 0 through 300 fall back to 100. (optional) (default to 100)
let orderBy = "orderBy_example" // String |  (optional) (default to .airdate)
let sort = "sort_example" // String |  (optional) (default to .desc)
let keyword = "keyword_example" // String |  (optional)

// Search and list Bangumi
BangumiAPI.listBangumi(type: type, subType: subType, eps: eps, offset: offset, limit: limit, orderBy: orderBy, sort: sort, keyword: keyword) { (response, error) in
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
 **type** | [**ItemTypeQuery**](.md) | TypeScript enum key used by the controller. | [optional] 
 **subType** | [**ItemSubTypeQuery**](.md) | TypeScript enum key used by the controller. | [optional] 
 **eps** | **Int** | Exact episode-count filter. | [optional] 
 **offset** | **Int** |  | [optional] [default to 0]
 **limit** | **Int** | Values outside 0 through 300 fall back to 100. | [optional] [default to 100]
 **orderBy** | **String** |  | [optional] [default to .airdate]
 **sort** | **String** |  | [optional] [default to .desc]
 **keyword** | **String** |  | [optional] 

### Return type

[**PaginatedBangumi**](PaginatedBangumi.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listOnAirBangumi**
```swift
    open class func listOnAirBangumi(type: ModelType_listOnAirBangumi, completion: @escaping (_ data: OnAirBangumiResponse?, _ error: Error?) -> Void)
```

List Bangumi airing during the current month

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let type = "type_example" // String | 

// List Bangumi airing during the current month
BangumiAPI.listOnAirBangumi(type: type) { (response, error) in
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
 **type** | **String** |  | 

### Return type

[**OnAirBangumiResponse**](OnAirBangumiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

