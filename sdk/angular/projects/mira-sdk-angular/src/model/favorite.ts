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
import { FavoriteStatus } from './favoriteStatus';
import { MainItem } from './mainItem';


export interface Favorite { 
    readonly id?: string;
    status: FavoriteStatus;
    reviewComment?: string;
    rating?: number;
    item: MainItem;
    userId: string;
}
export namespace Favorite {
}


