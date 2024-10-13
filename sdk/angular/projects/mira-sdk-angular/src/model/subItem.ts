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
import { MainItem } from './mainItem';
import { PropertyValue } from './propertyValue';


export interface SubItem { 
    id: string;
    bgmId: number;
    /**
     * Not used for ItemType.Individual and ItemType.Character
     */
    publicTime?: string;
    name?: string;
    nameCn?: string;
    properties: { [key: string]: PropertyValue; };
    type: SubItem.TypeEnum;
    episodeType: SubItem.EpisodeTypeEnum | null;
    ep?: number | null;
    disc?: number | null;
    desc?: string;
    sort: number;
    mainItemId: string;
    mainItem?: MainItem;
}
export namespace SubItem {
    export type TypeEnum = 0 | 1;
    export const TypeEnum = {
        Episode: 0 as TypeEnum,
        Song: 1 as TypeEnum
    };
    export type EpisodeTypeEnum = 0 | 1;
    export const EpisodeTypeEnum = {
        Episode: 0 as EpisodeTypeEnum,
        Special: 1 as EpisodeTypeEnum
    };
}


