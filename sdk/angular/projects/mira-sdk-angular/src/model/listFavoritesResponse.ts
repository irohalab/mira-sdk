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
import { Favorite } from './favorite';


export interface ListFavoritesResponse { 
    /**
     * a list of Favorite
     */
    data: Array<Favorite>;
    /**
     * total number of the result
     */
    total: number;
}

