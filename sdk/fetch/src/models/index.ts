/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface BatchGetMainItemByIdListResult
 */
export interface BatchGetMainItemByIdListResult {
    /**
     * 
     * @type {Array<MainItem>}
     * @memberof BatchGetMainItemByIdListResult
     */
    data: Array<MainItem>;
}
/**
 * 
 * @export
 * @interface BatchGetSubItemByIdListResult
 */
export interface BatchGetSubItemByIdListResult {
    /**
     * 
     * @type {Array<SubItem>}
     * @memberof BatchGetSubItemByIdListResult
     */
    data: Array<SubItem>;
}
/**
 * 
 * @export
 * @interface ClientMapping
 */
export interface ClientMapping {
    /**
     * 
     * @type {string}
     * @memberof ClientMapping
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ClientMapping
     */
    clientId: string;
    /**
     * 
     * @type {MainItem}
     * @memberof ClientMapping
     */
    item: MainItem;
}
/**
 * 
 * @export
 * @interface CreateSubItemFavoriteRequestBody
 */
export interface CreateSubItemFavoriteRequestBody {
    /**
     * 
     * @type {string}
     * @memberof CreateSubItemFavoriteRequestBody
     */
    subItemId: string;
}
/**
 * 
 * @export
 * @interface DeleteClientMappingByMainItemResponse
 */
export interface DeleteClientMappingByMainItemResponse {
    /**
     * how many entries are deleted, 1 is successful, 0 is unsuccessful.
     * @type {number}
     * @memberof DeleteClientMappingByMainItemResponse
     */
    data: number;
}
/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ErrorResponse
     */
    status?: number;
}
/**
 * 
 * @export
 * @interface Favorite
 */
export interface Favorite {
    /**
     * 
     * @type {string}
     * @memberof Favorite
     */
    readonly id?: string;
    /**
     * 
     * @type {FavoriteStatus}
     * @memberof Favorite
     */
    status: FavoriteStatus;
    /**
     * 
     * @type {string}
     * @memberof Favorite
     */
    reviewComment?: string;
    /**
     * 
     * @type {number}
     * @memberof Favorite
     */
    rating?: number;
    /**
     * 
     * @type {MainItem}
     * @memberof Favorite
     */
    item: MainItem;
    /**
     * 
     * @type {string}
     * @memberof Favorite
     */
    userId: string;
}


/**
 * 
 * @export
 * @interface FavoriteProgress
 */
export interface FavoriteProgress {
    /**
     * 
     * @type {number}
     * @memberof FavoriteProgress
     */
    progress: number;
}

/**
 * 
 * @export
 */
export const FavoriteStatus = {
    Planned: 'Planned',
    Watched: 'Watched',
    Watching: 'Watching',
    OnHold: 'OnHold',
    Dropped: 'Dropped'
} as const;
export type FavoriteStatus = typeof FavoriteStatus[keyof typeof FavoriteStatus];

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
}
/**
 * 
 * @export
 * @interface IdListRequestBody
 */
export interface IdListRequestBody {
    /**
     * 
     * @type {Array<string>}
     * @memberof IdListRequestBody
     */
    ids: Array<string>;
}
/**
 * image information
 * @export
 * @interface ImageInfo
 */
export interface ImageInfo {
    /**
     * 
     * @type {string}
     * @memberof ImageInfo
     */
    id: string;
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
     * @type {string}
     * @memberof ItemEntity
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof ItemEntity
     */
    bgmId: number;
    /**
     * Not used for ItemType.Individual and ItemType.Character
     * @type {string}
     * @memberof ItemEntity
     */
    publicTime?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemEntity
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemEntity
     */
    nameCn?: string;
    /**
     * 
     * @type {{ [key: string]: PropertyValue; }}
     * @memberof ItemEntity
     */
    properties: { [key: string]: PropertyValue; };
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
 * @interface ListFavoritesResponse
 */
export interface ListFavoritesResponse {
    /**
     * a list of Favorite
     * @type {Array<Favorite>}
     * @memberof ListFavoritesResponse
     */
    data: Array<Favorite>;
    /**
     * total number of the result
     * @type {number}
     * @memberof ListFavoritesResponse
     */
    total: number;
}
/**
 * 
 * @export
 * @interface ListMainItemResponse
 */
export interface ListMainItemResponse {
    /**
     * a list of MainItems
     * @type {Array<MainItem>}
     * @memberof ListMainItemResponse
     */
    data: Array<MainItem>;
    /**
     * total number of the result
     * @type {number}
     * @memberof ListMainItemResponse
     */
    total: number;
}
/**
 * 
 * @export
 * @interface ListSubItemFavoriteResponse
 */
export interface ListSubItemFavoriteResponse {
    /**
     * 
     * @type {Array<SubItemFavorite>}
     * @memberof ListSubItemFavoriteResponse
     */
    data: Array<SubItemFavorite>;
    /**
     * total number of the result, if itemId is provided, this field will not available
     * @type {number}
     * @memberof ListSubItemFavoriteResponse
     */
    total?: number;
}
/**
 * 
 * @export
 * @interface MainItem
 */
export interface MainItem {
    /**
     * 
     * @type {string}
     * @memberof MainItem
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof MainItem
     */
    bgmId: number;
    /**
     * Not used for ItemType.Individual and ItemType.Character
     * @type {string}
     * @memberof MainItem
     */
    publicTime?: string;
    /**
     * 
     * @type {string}
     * @memberof MainItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof MainItem
     */
    nameCn?: string;
    /**
     * 
     * @type {{ [key: string]: PropertyValue; }}
     * @memberof MainItem
     */
    properties: { [key: string]: PropertyValue; };
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
     * @type {ImageInfo}
     * @memberof MainItem
     */
    squareImage?: ImageInfo;
    /**
     * 
     * @type {Array<SubItem>}
     * @memberof MainItem
     */
    subItems?: Array<SubItem>;
    /**
     * 
     * @type {string}
     * @memberof MainItem
     */
    summary?: string;
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
     * @type {string}
     * @memberof OnAirItem
     */
    id: string;
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
 * @interface PatchFavoriteBody
 */
export interface PatchFavoriteBody {
    /**
     * 
     * @type {FavoriteStatus}
     * @memberof PatchFavoriteBody
     */
    status: FavoriteStatus;
    /**
     * 
     * @type {string}
     * @memberof PatchFavoriteBody
     */
    reviewComment?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchFavoriteBody
     */
    rating?: number;
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
     * @type {string}
     * @memberof SubItem
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof SubItem
     */
    bgmId: number;
    /**
     * Not used for ItemType.Individual and ItemType.Character
     * @type {string}
     * @memberof SubItem
     */
    publicTime?: string;
    /**
     * 
     * @type {string}
     * @memberof SubItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SubItem
     */
    nameCn?: string;
    /**
     * 
     * @type {{ [key: string]: PropertyValue; }}
     * @memberof SubItem
     */
    properties: { [key: string]: PropertyValue; };
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
     * @type {string}
     * @memberof SubItem
     */
    desc?: string;
    /**
     * 
     * @type {number}
     * @memberof SubItem
     */
    sort: number;
    /**
     * 
     * @type {string}
     * @memberof SubItem
     */
    mainItemId: string;
    /**
     * 
     * @type {MainItem}
     * @memberof SubItem
     */
    mainItem?: MainItem;
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

/**
 * 
 * @export
 * @interface SubItemFavorite
 */
export interface SubItemFavorite {
    /**
     * 
     * @type {string}
     * @memberof SubItemFavorite
     */
    id: string;
    /**
     * 
     * @type {SubItem}
     * @memberof SubItemFavorite
     */
    subItem?: SubItem;
    /**
     * 
     * @type {string}
     * @memberof SubItemFavorite
     */
    userId: string;
}
/**
 * 
 * @export
 * @interface SucceedEmptyResponse
 */
export interface SucceedEmptyResponse {
    /**
     * 
     * @type {string}
     * @memberof SucceedEmptyResponse
     */
    message: string;
}
