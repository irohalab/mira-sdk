# AccountAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountInfo**](AccountAPI.md#getaccountinfo) | **GET** /account/info | Get the current account
[**getLegacyAccountName**](AccountAPI.md#getlegacyaccountname) | **GET** /account/legacy/name | Get the legacy account name


# **getAccountInfo**
```swift
    open class func getAccountInfo(completion: @escaping (_ data: AccountInfo?, _ error: Error?) -> Void)
```

Get the current account

Returns an empty object when the token has no corresponding account or no token is supplied.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient


// Get the current account
AccountAPI.getAccountInfo() { (response, error) in
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

[**AccountInfo**](AccountInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLegacyAccountName**
```swift
    open class func getLegacyAccountName(completion: @escaping (_ data: LegacyNameResponse?, _ error: Error?) -> Void)
```

Get the legacy account name

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient


// Get the legacy account name
AccountAPI.getLegacyAccountName() { (response, error) in
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

[**LegacyNameResponse**](LegacyNameResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

