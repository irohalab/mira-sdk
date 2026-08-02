# MessageAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteInboxMessages**](MessageAPI.md#deleteinboxmessages) | **DELETE** /message | Delete inbox messages
[**listInboxMessages**](MessageAPI.md#listinboxmessages) | **GET** /message/inbox | List received messages
[**listSentMessages**](MessageAPI.md#listsentmessages) | **GET** /message/sent | List sent messages
[**markMessagesRead**](MessageAPI.md#markmessagesread) | **PUT** /message/read | Mark inbox messages as read


# **deleteInboxMessages**
```swift
    open class func deleteInboxMessages(ids: Set<UUID>, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```

Delete inbox messages

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MiraStreamingSDK

let ids = [123] // Set<UUID> | Comma-separated message IDs.

// Delete inbox messages
MessageAPI.deleteInboxMessages(ids: ids) { (response, error) in
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
 **ids** | [**Set&lt;UUID&gt;**](UUID.md) | Comma-separated message IDs. | 

### Return type

Void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listInboxMessages**
```swift
    open class func listInboxMessages(offset: Int? = nil, limit: Int? = nil, completion: @escaping (_ data: PaginatedMessage?, _ error: Error?) -> Void)
```

List received messages

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MiraStreamingSDK

let offset = 987 // Int |  (optional) (default to 0)
let limit = 987 // Int | Values outside 0 through 300 fall back to 20. (optional) (default to 20)

// List received messages
MessageAPI.listInboxMessages(offset: offset, limit: limit) { (response, error) in
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

[**PaginatedMessage**](PaginatedMessage.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSentMessages**
```swift
    open class func listSentMessages(offset: Int? = nil, limit: Int? = nil, completion: @escaping (_ data: PaginatedMessage?, _ error: Error?) -> Void)
```

List sent messages

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MiraStreamingSDK

let offset = 987 // Int |  (optional) (default to 0)
let limit = 987 // Int | Values outside 0 through 300 fall back to 20. (optional) (default to 20)

// List sent messages
MessageAPI.listSentMessages(offset: offset, limit: limit) { (response, error) in
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

[**PaginatedMessage**](PaginatedMessage.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markMessagesRead**
```swift
    open class func markMessagesRead(requestBody: Set<UUID>, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```

Mark inbox messages as read

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MiraStreamingSDK

let requestBody = [123] // Set<UUID> | 

// Mark inbox messages as read
MessageAPI.markMessagesRead(requestBody: requestBody) { (response, error) in
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
 **requestBody** | [**Set&lt;UUID&gt;**](UUID.md) |  | 

### Return type

Void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

