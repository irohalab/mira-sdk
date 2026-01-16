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
 * @interface CharacterRelationsWithMainItems
 */
export interface CharacterRelationsWithMainItems {
    /**
     * 
     * @type {Array<MainItemBasic>}
     * @memberof CharacterRelationsWithMainItems
     */
    mainItems: Array<MainItemBasic>;
    /**
     * 
     * @type {Array<ItemCastCharacterRelation>}
     * @memberof CharacterRelationsWithMainItems
     */
    relatedItems: Array<ItemCastCharacterRelation>;
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
 * represent the relation among the Item type, Person type and Character type MainItems, it can also only be Item and Character type relation.
 * @export
 * @interface ItemCastCharacterRelation
 */
export interface ItemCastCharacterRelation {
    /**
     * 
     * @type {string}
     * @memberof ItemCastCharacterRelation
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ItemCastCharacterRelation
     */
    mainItemId: string;
    /**
     * 
     * @type {number}
     * @memberof ItemCastCharacterRelation
     */
    mainItemBgmId: number;
    /**
     * 
     * @type {string}
     * @memberof ItemCastCharacterRelation
     */
    relatedCastId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ItemCastCharacterRelation
     */
    relatedCastBgmId: number | null;
    /**
     * 
     * @type {string}
     * @memberof ItemCastCharacterRelation
     */
    relatedCharacterId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ItemCastCharacterRelation
     */
    relatedCharacterBgmId: number;
    /**
     * 
     * @type {string}
     * @memberof ItemCastCharacterRelation
     */
    characterType: string;
    /**
     * 
     * @type {boolean}
     * @memberof ItemCastCharacterRelation
     */
    isLocked: boolean;
    /**
     * 
     * @type {string}
     * @memberof ItemCastCharacterRelation
     */
    relationType?: string;
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
 * represent the relation between the Item type MainItem and Person type MainItem
 * @export
 * @interface ItemPersonRelation
 */
export interface ItemPersonRelation {
    /**
     * 
     * @type {string}
     * @memberof ItemPersonRelation
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ItemPersonRelation
     */
    mainItemId: string;
    /**
     * 
     * @type {number}
     * @memberof ItemPersonRelation
     */
    mainItemBgmId: number;
    /**
     * 
     * @type {string}
     * @memberof ItemPersonRelation
     */
    personItemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ItemPersonRelation
     */
    personItemBgmId: number;
    /**
     * 
     * @type {string}
     * @memberof ItemPersonRelation
     */
    relationType: string;
    /**
     * 
     * @type {boolean}
     * @memberof ItemPersonRelation
     */
    isLocked: boolean;
}
/**
 * represent the relation of the Item type MainItems
 * @export
 * @interface ItemRelation
 */
export interface ItemRelation {
    /**
     * 
     * @type {string}
     * @memberof ItemRelation
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ItemRelation
     */
    mainItemId: string;
    /**
     * 
     * @type {number}
     * @memberof ItemRelation
     */
    mainItemBgmId: number;
    /**
     * 
     * @type {string}
     * @memberof ItemRelation
     */
    relatedItemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ItemRelation
     */
    relatedBgmId: number;
    /**
     * 
     * @type {string}
     * @memberof ItemRelation
     */
    relationType: string;
    /**
     * 
     * @type {boolean}
     * @memberof ItemRelation
     */
    isLocked: boolean;
}
/**
 * 
 * @export
 * @interface ItemRelationsWithMainItems
 */
export interface ItemRelationsWithMainItems {
    /**
     * 
     * @type {Array<MainItemBasic>}
     * @memberof ItemRelationsWithMainItems
     */
    mainItems: Array<MainItemBasic>;
    /**
     * 
     * @type {Array<ItemRelation>}
     * @memberof ItemRelationsWithMainItems
     */
    relatedItems: Array<ItemRelation>;
    /**
     * 
     * @type {Array<ItemPersonRelation>}
     * @memberof ItemRelationsWithMainItems
     */
    relatedPersons: Array<ItemPersonRelation>;
    /**
     * 
     * @type {Array<ItemCastCharacterRelation>}
     * @memberof ItemRelationsWithMainItems
     */
    relatedCharacters: Array<ItemCastCharacterRelation>;
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
     * @type {MainType}
     * @memberof MainItem
     */
    mainType: MainType;
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
 * 
 * @export
 * @interface MainItemBasic
 */
export interface MainItemBasic {
    /**
     * 
     * @type {string}
     * @memberof MainItemBasic
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MainItemBasic
     */
    bgmId: string;
    /**
     * 
     * @type {MainType}
     * @memberof MainItemBasic
     */
    mainType: MainType;
    /**
     * 
     * @type {ItemType}
     * @memberof MainItemBasic
     */
    type: ItemType;
    /**
     * 
     * @type {ItemSubType}
     * @memberof MainItemBasic
     */
    subType: ItemSubType;
    /**
     * determine if the MainItem is collection item
     * @type {boolean}
     * @memberof MainItemBasic
     */
    isCollection: boolean;
    /**
     * 
     * @type {ImageInfo}
     * @memberof MainItemBasic
     */
    coverImage?: ImageInfo;
    /**
     * 
     * @type {ImageInfo}
     * @memberof MainItemBasic
     */
    squareImage?: ImageInfo;
    /**
     * 
     * @type {string}
     * @memberof MainItemBasic
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof MainItemBasic
     */
    nameCn?: string;
}



/**
 * 
 * @export
 */
export const MainType = {
    Item: 0,
    Person: 1,
    Character: 2
} as const;
export type MainType = typeof MainType[keyof typeof MainType];

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
 * @interface PersonRelationsWithMainItems
 */
export interface PersonRelationsWithMainItems {
    /**
     * 
     * @type {Array<MainItemBasic>}
     * @memberof PersonRelationsWithMainItems
     */
    mainItems: Array<MainItemBasic>;
    /**
     * 
     * @type {Array<ItemPersonRelation>}
     * @memberof PersonRelationsWithMainItems
     */
    relatedItems: Array<ItemPersonRelation>;
    /**
     * 
     * @type {Array<ItemCastCharacterRelation>}
     * @memberof PersonRelationsWithMainItems
     */
    relatedCharacters: Array<ItemCastCharacterRelation>;
}

/**
 * 
 * @export
 */
export const PropertyType = {
    Staff: 'Staff',
    Item: 'Item',
    Character: 'Character',
    Info: 'Info',
    Cast: 'Cast'
} as const;
export type PropertyType = typeof PropertyType[keyof typeof PropertyType];

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
    anidbKey?: string;
    /**
     * 
     * @type {string}
     * @memberof PropertyValue
     */
    bgmKey?: string;
    /**
     * 
     * @type {PropertyType}
     * @memberof PropertyValue
     */
    propertyType?: PropertyType;
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
