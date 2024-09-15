/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface EntityBase
 */
export interface EntityBase {
    /**
     * 
     * @type {number}
     * @memberof EntityBase
     */
    id: number;
    /**
     * RFC3339 Datetime
     * @type {string}
     * @memberof EntityBase
     */
    createdTime: string;
    /**
     * RFC3339 Datetime to set the updateTime
     * @type {string}
     * @memberof EntityBase
     */
    updateTime?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityBase
     */
    version: number;
    /**
     * 
     * @type {boolean}
     * @memberof EntityBase
     */
    deleted: boolean;
}
/**
 * 
 * @export
 * @interface GetMainItemByIdResponse
 */
export interface GetMainItemByIdResponse {
    /**
     * 
     * @type {MainItem}
     * @memberof GetMainItemByIdResponse
     */
    data: MainItem;
    /**
     * result code, 0 is successful.
     * @type {number}
     * @memberof GetMainItemByIdResponse
     */
    status: number;
}
/**
 * 
 * @export
 * @interface GetOnAirItemListResponse
 */
export interface GetOnAirItemListResponse {
    /**
     * a list of OnAirItems
     * @type {Array<OnAirItem>}
     * @memberof GetOnAirItemListResponse
     */
    data: Array<OnAirItem>;
    /**
     * total number of the result
     * @type {number}
     * @memberof GetOnAirItemListResponse
     */
    total?: number;
    /**
     * result code, 0 is successful.
     * @type {number}
     * @memberof GetOnAirItemListResponse
     */
    status: number;
}
/**
 * image information
 * @export
 * @interface ImageInfo
 */
export interface ImageInfo {
    /**
     * 
     * @type {number}
     * @memberof ImageInfo
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ImageInfo
     */
    url: string;
    /**
     * 
     * @type {number}
     * @memberof ImageInfo
     */
    width: number;
    /**
     * 
     * @type {number}
     * @memberof ImageInfo
     */
    height: number;
    /**
     * 
     * @type {string}
     * @memberof ImageInfo
     */
    dormantColor: string;
}
/**
 * 
 * @export
 * @interface ItemEntity
 */
export interface ItemEntity {
    /**
     * 
     * @type {number}
     * @memberof ItemEntity
     */
    id: number;
    /**
     * RFC3339 Datetime
     * @type {string}
     * @memberof ItemEntity
     */
    createdTime: string;
    /**
     * RFC3339 Datetime to set the updateTime
     * @type {string}
     * @memberof ItemEntity
     */
    updateTime?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemEntity
     */
    version: number;
    /**
     * 
     * @type {boolean}
     * @memberof ItemEntity
     */
    deleted: boolean;
    /**
     * 
     * @type {number}
     * @memberof ItemEntity
     */
    bgmId: number;
    /**
     * 
     * @type {boolean}
     * @memberof ItemEntity
     */
    isBgmHide: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ItemEntity
     */
    lockedInBgm: boolean;
    /**
     * Not used for ItemType.Individual and ItemType.Character
     * @type {string}
     * @memberof ItemEntity
     */
    publicTime?: string;
    /**
     * Not used for ItemType.Individual and ItemType.Character
     * @type {boolean}
     * @memberof ItemEntity
     */
    isPublicTimeLocked: boolean;
    /**
     * 
     * @type {{ [key: string]: PropertyValue; }}
     * @memberof ItemEntity
     */
    properties: { [key: string]: PropertyValue; };
    /**
     * 
     * @type {boolean}
     * @memberof ItemEntity
     */
    isCoverImageLocked: boolean;
}

/**
 * 
 * @export
 */
export const ItemSubType = {
    Other: 'other',
    TV: 'TV',
    Web: 'web',
    OVA: 'OVA',
    Movie: 'movie',
    Novel: 'Novel',
    Comic: 'Comic',
    Illustration: 'Illustration',
    DramaJp: 'jp',
    DramaEn: 'en',
    DramaCn: 'cn',
    PC: 'PC',
    NDS: 'NDS',
    PSP: 'PSP',
    PS2: 'PS2',
    PS3: 'PS3',
    Xbox360: 'Xbox360',
    Mac: 'Mac OS',
    PS5: 'PS5',
    XboxSeriesXS: 'Xbox Series X/S',
    PS4: 'PS4',
    XboxOne: 'Xbox One',
    NintendoSwitch: 'Nintendo Switch',
    WiiU: 'Wii U',
    Wii: 'Wii',
    PSVita: 'PS Vita',
    N3DS: '3DS',
    IOS: 'iOS',
    Android: 'Android',
    ARC: 'ARC',
    XBOX: 'XBOX',
    GameCube: 'GameCube',
    Dreamcast: 'Dreamcast',
    Nintendo64: 'Nitendo 64',
    PlayStation: 'PlayStation',
    SFC: 'SFC',
    FC: 'FC',
    NEOGEOPocketColor: 'NEOGEO Pocket Color',
    GBA: 'GBA',
    GB: 'GB',
    VirtualBoy: 'Virtual Boy',
    WonderSwanColor: 'WonderSwan Color',
    WonderSwan: 'WonderSwan'
} as const;
export type ItemSubType = typeof ItemSubType[keyof typeof ItemSubType];


/**
 * 
 * @export
 */
export const ItemType = {
    Anime: 'anime',
    Game: 'game',
    Music: 'music',
    Book: 'book',
    Individual: 'individual',
    Character: 'character',
    RealWorld: 'real',
    Association: 'association',
    Corporation: 'corporation',
    Organization: 'organization',
    Ship: 'ship',
    Mechanic: 'mechanic'
} as const;
export type ItemType = typeof ItemType[keyof typeof ItemType];

/**
 * 
 * @export
 * @interface MainItem
 */
export interface MainItem {
    /**
     * 
     * @type {number}
     * @memberof MainItem
     */
    id: number;
    /**
     * RFC3339 Datetime
     * @type {string}
     * @memberof MainItem
     */
    createdTime: string;
    /**
     * RFC3339 Datetime to set the updateTime
     * @type {string}
     * @memberof MainItem
     */
    updateTime?: string;
    /**
     * 
     * @type {number}
     * @memberof MainItem
     */
    version: number;
    /**
     * 
     * @type {boolean}
     * @memberof MainItem
     */
    deleted: boolean;
    /**
     * 
     * @type {number}
     * @memberof MainItem
     */
    bgmId: number;
    /**
     * 
     * @type {boolean}
     * @memberof MainItem
     */
    isBgmHide: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MainItem
     */
    lockedInBgm: boolean;
    /**
     * Not used for ItemType.Individual and ItemType.Character
     * @type {string}
     * @memberof MainItem
     */
    publicTime?: string;
    /**
     * Not used for ItemType.Individual and ItemType.Character
     * @type {boolean}
     * @memberof MainItem
     */
    isPublicTimeLocked: boolean;
    /**
     * 
     * @type {{ [key: string]: PropertyValue; }}
     * @memberof MainItem
     */
    properties: { [key: string]: PropertyValue; };
    /**
     * 
     * @type {boolean}
     * @memberof MainItem
     */
    isCoverImageLocked: boolean;
    /**
     * 
     * @type {number}
     * @memberof MainItem
     */
    mainType: MainItemMainTypeEnum;
    /**
     * 
     * @type {ItemType}
     * @memberof MainItem
     */
    type: ItemType;
    /**
     * 
     * @type {ItemSubType}
     * @memberof MainItem
     */
    subType?: ItemSubType;
    /**
     * determine if the MainItem is collection item
     * @type {boolean}
     * @memberof MainItem
     */
    isCollection: boolean;
    /**
     * 
     * @type {ImageInfo}
     * @memberof MainItem
     */
    coverImage?: ImageInfo;
    /**
     * 
     * @type {Array<SubItem>}
     * @memberof MainItem
     */
    subItem?: Array<SubItem>;
}


/**
 * @export
 */
export const MainItemMainTypeEnum = {
    Item: 0,
    Person: 1,
    Character: 2
} as const;
export type MainItemMainTypeEnum = typeof MainItemMainTypeEnum[keyof typeof MainItemMainTypeEnum];

/**
 * 
 * @export
 * @interface OnAirItem
 */
export interface OnAirItem {
    /**
     * 
     * @type {number}
     * @memberof OnAirItem
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof OnAirItem
     */
    bgmId: number;
    /**
     * RFC3339 Datetime
     * @type {string}
     * @memberof OnAirItem
     */
    publicTime?: string;
    /**
     * 
     * @type {ItemType}
     * @memberof OnAirItem
     */
    type: ItemType;
    /**
     * 
     * @type {ItemSubType}
     * @memberof OnAirItem
     */
    subType?: ItemSubType;
    /**
     * 
     * @type {string}
     * @memberof OnAirItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof OnAirItem
     */
    nameCn?: string;
    /**
     * 
     * @type {ImageInfo}
     * @memberof OnAirItem
     */
    coverImage?: ImageInfo;
}


/**
 * 
 * @export
 * @interface PropertyValue
 */
export interface PropertyValue {
    /**
     * 
     * @type {string}
     * @memberof PropertyValue
     */
    propertyType?: PropertyValuePropertyTypeEnum | null;
    /**
     * 
     * @type {boolean}
     * @memberof PropertyValue
     */
    locked: boolean;
    /**
     * 
     * @type {PropertyValueValue}
     * @memberof PropertyValue
     */
    value: PropertyValueValue;
}


/**
 * @export
 */
export const PropertyValuePropertyTypeEnum = {
    Staff: 'Staff',
    Item: 'Item',
    Character: 'Character',
    Info: 'Info',
    Cast: 'Cast'
} as const;
export type PropertyValuePropertyTypeEnum = typeof PropertyValuePropertyTypeEnum[keyof typeof PropertyValuePropertyTypeEnum];

/**
 * @type PropertyValueValue
 * 
 * @export
 */
export type PropertyValueValue = Array<string> | Array<{ [key: string]: string; }> | string;
/**
 * 
 * @export
 * @interface SubItem
 */
export interface SubItem {
    /**
     * 
     * @type {number}
     * @memberof SubItem
     */
    id: number;
    /**
     * RFC3339 Datetime
     * @type {string}
     * @memberof SubItem
     */
    createdTime: string;
    /**
     * RFC3339 Datetime to set the updateTime
     * @type {string}
     * @memberof SubItem
     */
    updateTime?: string;
    /**
     * 
     * @type {number}
     * @memberof SubItem
     */
    version: number;
    /**
     * 
     * @type {boolean}
     * @memberof SubItem
     */
    deleted: boolean;
    /**
     * 
     * @type {number}
     * @memberof SubItem
     */
    bgmId: number;
    /**
     * 
     * @type {boolean}
     * @memberof SubItem
     */
    isBgmHide: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubItem
     */
    lockedInBgm: boolean;
    /**
     * Not used for ItemType.Individual and ItemType.Character
     * @type {string}
     * @memberof SubItem
     */
    publicTime?: string;
    /**
     * Not used for ItemType.Individual and ItemType.Character
     * @type {boolean}
     * @memberof SubItem
     */
    isPublicTimeLocked: boolean;
    /**
     * 
     * @type {{ [key: string]: PropertyValue; }}
     * @memberof SubItem
     */
    properties: { [key: string]: PropertyValue; };
    /**
     * 
     * @type {boolean}
     * @memberof SubItem
     */
    isCoverImageLocked: boolean;
    /**
     * 
     * @type {number}
     * @memberof SubItem
     */
    type: SubItemTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof SubItem
     */
    episodeType: SubItemEpisodeTypeEnum | null;
    /**
     * 
     * @type {number}
     * @memberof SubItem
     */
    ep?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubItem
     */
    disc?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubItem
     */
    sort: number;
}


/**
 * @export
 */
export const SubItemTypeEnum = {
    Episode: 0,
    Song: 1
} as const;
export type SubItemTypeEnum = typeof SubItemTypeEnum[keyof typeof SubItemTypeEnum];

/**
 * @export
 */
export const SubItemEpisodeTypeEnum = {
    Episode: 0,
    Special: 1
} as const;
export type SubItemEpisodeTypeEnum = typeof SubItemEpisodeTypeEnum[keyof typeof SubItemEpisodeTypeEnum];

