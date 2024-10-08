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
import { ItemEntityPropertiesValue } from './itemEntityPropertiesValue';


export interface ItemEntity { 
    id: string;
    bgmId: number;
    /**
     * Not used for ItemType.Individual and ItemType.Character
     */
    publicTime?: string;
    name?: string;
    name_cn?: string;
    properties: { [key: string]: ItemEntityPropertiesValue; };
}

