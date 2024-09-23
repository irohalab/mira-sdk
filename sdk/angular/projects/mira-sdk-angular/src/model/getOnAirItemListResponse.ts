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
import { OnAirItem } from './onAirItem';


export interface GetOnAirItemListResponse { 
    /**
     * a list of OnAirItems
     */
    data: Array<OnAirItem>;
    /**
     * total number of the result
     */
    total?: number;
    /**
     * result code, 0 is successful.
     */
    status: number;
}

