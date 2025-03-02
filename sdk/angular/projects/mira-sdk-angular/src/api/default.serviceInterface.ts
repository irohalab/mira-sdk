/**
 * mira API
 * API for Project-Mira
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { ClientMapping } from '../model/models';
import { CreateSubItemFavoriteRequestBody } from '../model/models';
import { DeleteClientMappingByMainItemResponse } from '../model/models';
import { Favorite } from '../model/models';
import { GetOnAirItemListResponse } from '../model/models';
import { ListFavoritesResponse } from '../model/models';
import { ListMainItemResponse } from '../model/models';
import { ListSubItemFavoriteResponse } from '../model/models';
import { MainItem } from '../model/models';
import { PatchFavoriteBody } from '../model/models';
import { SubItem } from '../model/models';
import { SubItemFavorite } from '../model/models';
import { SucceedEmptyResponse } from '../model/models';


import { MiraConfiguration }                                     from '../configuration';



export interface DefaultMiraInterface {
    defaultHeaders: HttpHeaders;
    configuration: MiraConfiguration;

    /**
     * 
     * Add ClientMapping
     * @param request_body 
     */
    addClientMapping(request_body: Array<string>, extraHttpRequestParams?: any): Observable<ClientMapping>;

    /**
     * 
     * create a favorite for user and item
     * @param Favorite 
     */
    createFavorite(Favorite: Favorite, extraHttpRequestParams?: any): Observable<Favorite>;

    /**
     * 
     * create a SubItemFavorite
     * @param CreateSubItemFavoriteRequestBody 
     */
    createSubItemFavorite(CreateSubItemFavoriteRequestBody: CreateSubItemFavoriteRequestBody, extraHttpRequestParams?: any): Observable<SubItemFavorite>;

    /**
     * 
     * Delete ClientMapping by MainItem id
     * @param id 
     */
    deleteClientMappingByMainItemId(id: string, extraHttpRequestParams?: any): Observable<DeleteClientMappingByMainItemResponse>;

    /**
     * 
     * Delete a favorite
     * @param id 
     */
    deleteFavorite(id: string, extraHttpRequestParams?: any): Observable<SucceedEmptyResponse>;

    /**
     * 
     * Delete a SubItemFavorite
     * @param id 
     */
    deleteSubItemFavorite(id: string, extraHttpRequestParams?: any): Observable<SucceedEmptyResponse>;

    /**
     * 
     * get favorite by MainItem id
     * @param id 
     */
    getFavoriteByMainItemId(id: string, extraHttpRequestParams?: any): Observable<Favorite>;

    /**
     * 
     * get a MainItem by id
     * @param id MainItem id
     * @param coverImage populate coverImage if true
     * @param subItems populate subItems if true
     */
    getMainItemById(id: string, coverImage?: string, subItems?: string, extraHttpRequestParams?: any): Observable<MainItem>;

    /**
     * 
     * get a SubItem by id
     * @param id SubItem Id
     */
    getSubItemById(id: string, extraHttpRequestParams?: any): Observable<SubItem>;

    /**
     * 
     * list favorites for user
     * @param status 
     * @param offset 
     * @param limit 
     * @param orderBy 
     * @param sort 
     */
    listFavorites(status: string, offset?: number, limit?: number, orderBy?: string, sort?: string, extraHttpRequestParams?: any): Observable<ListFavoritesResponse>;

    /**
     * 
     * list MainItems
     * @param mainType 
     * @param type 
     * @param subType 
     * @param offset 
     * @param limit 
     * @param orderBy 
     * @param sort 
     * @param keyword 
     */
    listMainItems(mainType: string, type?: string, subType?: string, offset?: number, limit?: number, orderBy?: string, sort?: string, keyword?: string, extraHttpRequestParams?: any): Observable<ListMainItemResponse>;

    /**
     * 
     * list SubItemFavorite
     * @param itemId itemId of the SubItem, if provided then other parameters are ignored
     * @param offset 
     * @param limit 
     * @param orderBy 
     * @param sort 
     */
    listSubItemFavorites(itemId?: string, offset?: number, limit?: number, orderBy?: string, sort?: string, extraHttpRequestParams?: any): Observable<ListSubItemFavoriteResponse>;

    /**
     * 
     * get a list of on air MainItems with cover image
     * @param type type of MainItem, must be either anime or real
     */
    onAirItem(type: string, extraHttpRequestParams?: any): Observable<GetOnAirItemListResponse>;

    /**
     * 
     * change status of a favorite
     * @param id 
     * @param PatchFavoriteBody 
     */
    patchFavorite(id: string, PatchFavoriteBody: PatchFavoriteBody, extraHttpRequestParams?: any): Observable<SucceedEmptyResponse>;

}
