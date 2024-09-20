/**
 * mira Item API
 * Item API for Project-Mira
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ItemSubType } from './itemSubType';
import { ItemType } from './itemType';
import { SubItem } from './subItem';
import { PropertyValue } from './propertyValue';
import { ImageInfo } from './imageInfo';


export interface MainItem { 
    id: string;
    /**
     * RFC3339 Datetime
     */
    createdTime: string;
    /**
     * RFC3339 Datetime to set the updateTime
     */
    updateTime?: string;
    version: number;
    deleted: boolean;
    bgmId: number;
    isBgmHide: boolean;
    lockedInBgm: boolean;
    /**
     * Not used for ItemType.Individual and ItemType.Character
     */
    publicTime?: string;
    /**
     * Not used for ItemType.Individual and ItemType.Character
     */
    isPublicTimeLocked: boolean;
    properties: { [key: string]: PropertyValue; };
    isCoverImageLocked: boolean;
    mainType: MainItem.MainTypeEnum;
    type: ItemType;
    subType?: ItemSubType;
    /**
     * determine if the MainItem is collection item
     */
    isCollection: boolean;
    coverImage?: ImageInfo;
    subItem?: Array<SubItem>;
}
export namespace MainItem {
    export type MainTypeEnum = 0 | 1 | 2;
    export const MainTypeEnum = {
        Item: 0 as MainTypeEnum,
        Person: 1 as MainTypeEnum,
        Character: 2 as MainTypeEnum
    };
}


