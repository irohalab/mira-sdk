/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface CreateFavoriteRequestBody
 */
export interface CreateFavoriteRequestBody {
    /**
     * 
     * @type {FavoriteStatus}
     * @memberof CreateFavoriteRequestBody
     */
    status: FavoriteStatus;
    /**
     * 
     * @type {string}
     * @memberof CreateFavoriteRequestBody
     */
    itemId: string;
}


/**
 * 
 * @export
 * @interface CreateFavoriteResponse
 */
export interface CreateFavoriteResponse {
    /**
     * 
     * @type {Favorite}
     * @memberof CreateFavoriteResponse
     */
    data: Favorite;
    /**
     * result code, 0 is successful.
     * @type {number}
     * @memberof CreateFavoriteResponse
     */
    status: number;
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
 * @interface CreateSubItemFavoriteResponse
 */
export interface CreateSubItemFavoriteResponse {
    /**
     * 
     * @type {SubItemFavorite}
     * @memberof CreateSubItemFavoriteResponse
     */
    data: SubItemFavorite;
    /**
     * result code, 0 is successful.
     * @type {number}
     * @memberof CreateSubItemFavoriteResponse
     */
    status: number;
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
    id: string;
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
 * @interface GetFavoriteByMainItemIdResponse
 */
export interface GetFavoriteByMainItemIdResponse {
    /**
     * 
     * @type {Favorite}
     * @memberof GetFavoriteByMainItemIdResponse
     */
    data: Favorite;
    /**
     * result code, 0 is successful.
     * @type {number}
     * @memberof GetFavoriteByMainItemIdResponse
     */
    status: number;
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
 * 
 * @export
 * @interface GetSubItemResponse
 */
export interface GetSubItemResponse {
    /**
     * 
     * @type {SubItem}
     * @memberof GetSubItemResponse
     */
    data: SubItem;
    /**
     * result code, 0 is successful.
     * @type {number}
     * @memberof GetSubItemResponse
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
     * @type {{ [key: string]: ItemEntityPropertiesValue; }}
     * @memberof ItemEntity
     */
    properties: { [key: string]: ItemEntityPropertiesValue; };
}
/**
 * @type ItemEntityPropertiesValue
 * 
 * @export
 */
export type ItemEntityPropertiesValue = Array<string> | Array<{ [key: string]: string; }> | string;

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
    /**
     * result code, 0 is successful.
     * @type {number}
     * @memberof ListFavoritesResponse
     */
    status: number;
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
    /**
     * result code, 0 is successful.
     * @type {number}
     * @memberof ListMainItemResponse
     */
    status: number;
}
/**
 * 
 * @export
 * @interface ListSubItemFavoriteResponse
 */
export interface ListSubItemFavoriteResponse {
    /**
     * 
     * @type {SubItemFavorite}
     * @memberof ListSubItemFavoriteResponse
     */
    data: SubItemFavorite;
    /**
     * total number of the result, if itemId is provided, this field will not available
     * @type {number}
     * @memberof ListSubItemFavoriteResponse
     */
    total?: number;
    /**
     * result code, 0 is successful.
     * @type {number}
     * @memberof ListSubItemFavoriteResponse
     */
    status: number;
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
     * @type {{ [key: string]: ItemEntityPropertiesValue; }}
     * @memberof MainItem
     */
    properties: { [key: string]: ItemEntityPropertiesValue; };
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
    subItem?: Array<SubItem>;
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
}


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
     * @type {{ [key: string]: ItemEntityPropertiesValue; }}
     * @memberof SubItem
     */
    properties: { [key: string]: ItemEntityPropertiesValue; };
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
    subItem: SubItem;
    /**
     * 
     * @type {string}
     * @memberof SubItemFavorite
     */
    userId: string;
}
