# DefaultApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addClientMapping**](DefaultApi.md#addclientmapping) | **POST** /client-mapping |  |
| [**batchGetMainItemByIdList**](DefaultApi.md#batchgetmainitembyidlist) | **POST** /client-mapping/batch/main |  |
| [**batchGetSubItemsByIdList**](DefaultApi.md#batchgetsubitemsbyidlist) | **POST** /client-mapping/batch/subItem |  |
| [**createFavorite**](DefaultApi.md#createfavorite) | **POST** /favorite |  |
| [**createSubItemFavorites**](DefaultApi.md#createsubitemfavorites) | **POST** /favorite/sub |  |
| [**deleteClientMappingByMainItemId**](DefaultApi.md#deleteclientmappingbymainitemid) | **DELETE** /client-mapping/main/{id} |  |
| [**deleteFavorite**](DefaultApi.md#deletefavorite) | **DELETE** /favorite/{id} |  |
| [**deleteSubItemFavorite**](DefaultApi.md#deletesubitemfavorite) | **DELETE** /favorite/sub/{id} |  |
| [**getFavoriteById**](DefaultApi.md#getfavoritebyid) | **GET** /favorite/{id} |  |
| [**getFavoriteByMainItemId**](DefaultApi.md#getfavoritebymainitemid) | **GET** /favorite/main/{id} |  |
| [**getFavoriteProgressByMainItemId**](DefaultApi.md#getfavoriteprogressbymainitemid) | **GET** /favorite/progress |  |
| [**getMainItemById**](DefaultApi.md#getmainitembyid) | **GET** /public/item/main/{id} |  |
| [**getRelationsOfCharacter**](DefaultApi.md#getrelationsofcharacter) | **GET** /public/relation/character/{id} |  |
| [**getRelationsOfItem**](DefaultApi.md#getrelationsofitem) | **GET** /public/relation/item/{id} |  |
| [**getRelationsOfPerson**](DefaultApi.md#getrelationsofperson) | **GET** /public/relation/person/{id} |  |
| [**getSubItemById**](DefaultApi.md#getsubitembyid) | **GET** /public/item/main/subItem/{id} |  |
| [**listFavorites**](DefaultApi.md#listfavorites) | **GET** /favorite |  |
| [**listMainItems**](DefaultApi.md#listmainitems) | **GET** /public/item/main |  |
| [**listSubItemFavorites**](DefaultApi.md#listsubitemfavorites) | **GET** /favorite/sub |  |
| [**onAirItem**](DefaultApi.md#onairitem) | **GET** /public/item/on-air |  |
| [**patchFavorite**](DefaultApi.md#patchfavorite) | **PATCH** /favorite/{id} |  |
| [**predictMainItemName**](DefaultApi.md#predictmainitemname) | **GET** /public/item/predict |  |
| [**syncFavorites**](DefaultApi.md#syncfavorites) | **POST** /favorite/sync |  |
| [**updateFavoriteProgress**](DefaultApi.md#updatefavoriteprogress) | **POST** /favorite/progress |  |



## addClientMapping

> ClientMapping addClientMapping(request_body)



Add ClientMapping

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { AddClientMappingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // Array<string>
    request_body: ...,
  } satisfies AddClientMappingRequest;

  try {
    const data = await api.addClientMapping(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **request_body** | `Array<string>` |  | |

### Return type

[**ClientMapping**](ClientMapping.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully added ClientMapping |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## batchGetMainItemByIdList

> BatchGetMainItemByIdListResult batchGetMainItemByIdList(IdListRequestBody)



get mainItems by id list

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { BatchGetMainItemByIdListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // IdListRequestBody
    IdListRequestBody: ...,
  } satisfies BatchGetMainItemByIdListRequest;

  try {
    const data = await api.batchGetMainItemByIdList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **IdListRequestBody** | [IdListRequestBody](IdListRequestBody.md) |  | |

### Return type

[**BatchGetMainItemByIdListResult**](BatchGetMainItemByIdListResult.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully return a list of MainItems |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## batchGetSubItemsByIdList

> BatchGetSubItemByIdListResult batchGetSubItemsByIdList(IdListRequestBody)



get SubItems by id list

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { BatchGetSubItemsByIdListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // IdListRequestBody
    IdListRequestBody: ...,
  } satisfies BatchGetSubItemsByIdListRequest;

  try {
    const data = await api.batchGetSubItemsByIdList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **IdListRequestBody** | [IdListRequestBody](IdListRequestBody.md) |  | |

### Return type

[**BatchGetSubItemByIdListResult**](BatchGetSubItemByIdListResult.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully return a list of SubItems |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createFavorite

> Favorite createFavorite(Favorite)



create a favorite for user and item

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { CreateFavoriteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // Favorite
    Favorite: ...,
  } satisfies CreateFavoriteRequest;

  try {
    const data = await api.createFavorite(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Favorite** | [Favorite](Favorite.md) |  | |

### Return type

[**Favorite**](Favorite.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully created a favorite record for itemId |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createSubItemFavorites

> SubItemFavorite createSubItemFavorites(CreateSubItemFavoritesRequestBody)



create SubItemFavorites

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { CreateSubItemFavoritesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // CreateSubItemFavoritesRequestBody
    CreateSubItemFavoritesRequestBody: ...,
  } satisfies CreateSubItemFavoritesRequest;

  try {
    const data = await api.createSubItemFavorites(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateSubItemFavoritesRequestBody** | [CreateSubItemFavoritesRequestBody](CreateSubItemFavoritesRequestBody.md) |  | |

### Return type

[**SubItemFavorite**](SubItemFavorite.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully created a SubItemFavorite |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteClientMappingByMainItemId

> DeleteClientMappingByMainItemResponse deleteClientMappingByMainItemId(id)



Delete ClientMapping by MainItem id

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { DeleteClientMappingByMainItemIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies DeleteClientMappingByMainItemIdRequest;

  try {
    const data = await api.deleteClientMappingByMainItemId(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeleteClientMappingByMainItemResponse**](DeleteClientMappingByMainItemResponse.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | return the result of the operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFavorite

> SucceedEmptyResponse deleteFavorite(id)



Delete a favorite

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { DeleteFavoriteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies DeleteFavoriteRequest;

  try {
    const data = await api.deleteFavorite(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**SucceedEmptyResponse**](SucceedEmptyResponse.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operation Complete Successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSubItemFavorite

> SucceedEmptyResponse deleteSubItemFavorite(id)



Delete a SubItemFavorite

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { DeleteSubItemFavoriteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies DeleteSubItemFavoriteRequest;

  try {
    const data = await api.deleteSubItemFavorite(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**SucceedEmptyResponse**](SucceedEmptyResponse.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operation Complete Successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFavoriteById

> GetFavoriteResponse getFavoriteById(id)



Get a favorite by id

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetFavoriteByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetFavoriteByIdRequest;

  try {
    const data = await api.getFavoriteById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GetFavoriteResponse**](GetFavoriteResponse.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully get a favorite by id |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFavoriteByMainItemId

> Favorite getFavoriteByMainItemId(id)



get favorite by MainItem id

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetFavoriteByMainItemIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetFavoriteByMainItemIdRequest;

  try {
    const data = await api.getFavoriteByMainItemId(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Favorite**](Favorite.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully get a favorite |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFavoriteProgressByMainItemId

> FavoriteProgress getFavoriteProgressByMainItemId(mainItemId, epType)



get favorite progress (number of SubItemFavorite from the beginning) of a episode type for mainItem

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetFavoriteProgressByMainItemIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    mainItemId: mainItemId_example,
    // number
    epType: 56,
  } satisfies GetFavoriteProgressByMainItemIdRequest;

  try {
    const data = await api.getFavoriteProgressByMainItemId(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mainItemId** | `string` |  | [Defaults to `undefined`] |
| **epType** | `number` |  | [Defaults to `undefined`] |

### Return type

[**FavoriteProgress**](FavoriteProgress.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the progress of current mainItem favorite. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMainItemById

> MainItem getMainItemById(id, coverImage, subItems)



get a MainItem by id

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetMainItemByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | MainItem id
    id: id_example,
    // string | populate coverImage if true (optional)
    coverImage: coverImage_example,
    // string | populate subItems if true (optional)
    subItems: subItems_example,
  } satisfies GetMainItemByIdRequest;

  try {
    const data = await api.getMainItemById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | MainItem id | [Defaults to `undefined`] |
| **coverImage** | `string` | populate coverImage if true | [Optional] [Defaults to `undefined`] |
| **subItems** | `string` | populate subItems if true | [Optional] [Defaults to `undefined`] |

### Return type

[**MainItem**](MainItem.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully returned a MainItem. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRelationsOfCharacter

> CharacterRelationsWithMainItems getRelationsOfCharacter(id)



get all related (Item , Cast) MainItem of an Character Type MainItem.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetRelationsOfCharacterRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | MainItem id
    id: id_example,
  } satisfies GetRelationsOfCharacterRequest;

  try {
    const data = await api.getRelationsOfCharacter(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | MainItem id | [Defaults to `undefined`] |

### Return type

[**CharacterRelationsWithMainItems**](CharacterRelationsWithMainItems.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully returns all the relations of the MainItem |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRelationsOfItem

> ItemRelationsWithMainItems getRelationsOfItem(id)



get all related (Item, Staff, Cast, Character) MainItem of an Item Type MainItem.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetRelationsOfItemRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | MainItem id
    id: id_example,
  } satisfies GetRelationsOfItemRequest;

  try {
    const data = await api.getRelationsOfItem(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | MainItem id | [Defaults to `undefined`] |

### Return type

[**ItemRelationsWithMainItems**](ItemRelationsWithMainItems.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully returns all the relations of the MainItem |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRelationsOfPerson

> PersonRelationsWithMainItems getRelationsOfPerson(id)



get all related (Item , Character) MainItem of an Person Type MainItem.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetRelationsOfPersonRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | MainItem id
    id: id_example,
  } satisfies GetRelationsOfPersonRequest;

  try {
    const data = await api.getRelationsOfPerson(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | MainItem id | [Defaults to `undefined`] |

### Return type

[**PersonRelationsWithMainItems**](PersonRelationsWithMainItems.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully returns all the relations of the MainItem |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubItemById

> SubItem getSubItemById(id)



get a SubItem by id

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetSubItemByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | SubItem Id
    id: id_example,
  } satisfies GetSubItemByIdRequest;

  try {
    const data = await api.getSubItemById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | SubItem Id | [Defaults to `undefined`] |

### Return type

[**SubItem**](SubItem.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully return a SubItem |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listFavorites

> ListFavoritesResponse listFavorites(status, offset, limit, orderBy, sort)



list favorites for user

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ListFavoritesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    status: status_example,
    // number (optional)
    offset: 56,
    // number (optional)
    limit: 56,
    // string (optional)
    orderBy: orderBy_example,
    // string (optional)
    sort: sort_example,
  } satisfies ListFavoritesRequest;

  try {
    const data = await api.listFavorites(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **status** | `string` |  | [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **orderBy** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sort** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListFavoritesResponse**](ListFavoritesResponse.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully returns a list of favorite object of a user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMainItems

> ListMainItemResponse listMainItems(serviceClientId, mainType, type, subType, offset, limit, orderBy, sort, keyword)



list MainItems

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ListMainItemsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string (optional)
    serviceClientId: serviceClientId_example,
    // string (optional)
    mainType: mainType_example,
    // string (optional)
    type: type_example,
    // string (optional)
    subType: subType_example,
    // number (optional)
    offset: 56,
    // number (optional)
    limit: 56,
    // string (optional)
    orderBy: orderBy_example,
    // string (optional)
    sort: sort_example,
    // string (optional)
    keyword: keyword_example,
  } satisfies ListMainItemsRequest;

  try {
    const data = await api.listMainItems(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **serviceClientId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **mainType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **type** | `string` |  | [Optional] [Defaults to `undefined`] |
| **subType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **orderBy** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sort** | `string` |  | [Optional] [Defaults to `undefined`] |
| **keyword** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListMainItemResponse**](ListMainItemResponse.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully return a list of MainItems and a total count of MainItems that match the condition |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSubItemFavorites

> ListSubItemFavoriteResponse listSubItemFavorites(itemId, offset, limit, orderBy, sort, subItem)



list SubItemFavorite

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ListSubItemFavoritesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | itemId of the SubItem, if provided then other parameters are ignored (optional)
    itemId: itemId_example,
    // number (optional)
    offset: 56,
    // number (optional)
    limit: 56,
    // string (optional)
    orderBy: orderBy_example,
    // string (optional)
    sort: sort_example,
    // boolean (optional)
    subItem: true,
  } satisfies ListSubItemFavoritesRequest;

  try {
    const data = await api.listSubItemFavorites(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **itemId** | `string` | itemId of the SubItem, if provided then other parameters are ignored | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **orderBy** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sort** | `string` |  | [Optional] [Defaults to `undefined`] |
| **subItem** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListSubItemFavoriteResponse**](ListSubItemFavoriteResponse.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully return a list of SubItemFavorite |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## onAirItem

> GetOnAirItemListResponse onAirItem(type)



get a list of on air MainItems with cover image

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { OnAirItemRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | type of MainItem, must be either anime or real
    type: type_example,
  } satisfies OnAirItemRequest;

  try {
    const data = await api.onAirItem(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **type** | `string` | type of MainItem, must be either anime or real | [Defaults to `undefined`] |

### Return type

[**GetOnAirItemListResponse**](GetOnAirItemListResponse.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully returned a list of on air MainItems with cover image. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchFavorite

> SucceedEmptyResponse patchFavorite(id, PatchFavoriteBody)



change status of a favorite

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { PatchFavoriteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    id: id_example,
    // PatchFavoriteBody
    PatchFavoriteBody: ...,
  } satisfies PatchFavoriteRequest;

  try {
    const data = await api.patchFavorite(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |
| **PatchFavoriteBody** | [PatchFavoriteBody](PatchFavoriteBody.md) |  | |

### Return type

[**SucceedEmptyResponse**](SucceedEmptyResponse.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operation Complete Successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## predictMainItemName

> Array&lt;string&gt; predictMainItemName(prefix)



predict Main Item names base on provided prefix

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { PredictMainItemNameRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | start part of the name
    prefix: prefix_example,
  } satisfies PredictMainItemNameRequest;

  try {
    const data = await api.predictMainItemName(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **prefix** | `string` | start part of the name | [Defaults to `undefined`] |

### Return type

**Array<string>**

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | candidate name list which matches the start characters of prefix, if the prefix length less than 3 then an empty array will return. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## syncFavorites

> SyncFavoritesResponse syncFavorites(SyncFavoritesRequestBody)



Sync favorites from external source, merge with existing favorites

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { SyncFavoritesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // SyncFavoritesRequestBody
    SyncFavoritesRequestBody: ...,
  } satisfies SyncFavoritesRequest;

  try {
    const data = await api.syncFavorites(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **SyncFavoritesRequestBody** | [SyncFavoritesRequestBody](SyncFavoritesRequestBody.md) |  | |

### Return type

[**SyncFavoritesResponse**](SyncFavoritesResponse.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully synced favorites |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFavoriteProgress

> SucceedEmptyResponse updateFavoriteProgress(mainItemId, progress, epType)



update progress of a favorite, will create/delete SubItemFavorite

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { UpdateFavoriteProgressRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    mainItemId: mainItemId_example,
    // number
    progress: 56,
    // number
    epType: 56,
  } satisfies UpdateFavoriteProgressRequest;

  try {
    const data = await api.updateFavoriteProgress(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mainItemId** | `string` |  | [Defaults to `undefined`] |
| **progress** | `number` |  | [Defaults to `undefined`] |
| **epType** | `number` |  | [Defaults to `undefined`] |

### Return type

[**SucceedEmptyResponse**](SucceedEmptyResponse.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operation Complete Successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

