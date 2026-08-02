# AnnounceAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAnnouncements**](AnnounceAPI.md#listannouncements) | **GET** /announce | List currently available announcements


# **listAnnouncements**
```swift
    open class func listAnnouncements(completion: @escaping (_ data: [Announce]?, _ error: Error?) -> Void)
```

List currently available announcements

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient


// List currently available announcements
AnnounceAPI.listAnnouncements() { (response, error) in
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
This endpoint does not need any parameter.

### Return type

[**[Announce]**](Announce.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

