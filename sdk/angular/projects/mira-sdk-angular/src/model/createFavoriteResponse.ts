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


export interface CreateFavoriteResponse { 
    data: Favorite;
    /**
     * result code, 0 is successful.
     */
    status: number;
}

