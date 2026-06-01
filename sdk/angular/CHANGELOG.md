# Changelog

Release history for `@irohalab/mira-sdk-angular`, based on npm publish history and shared `mira-sdk` GitHub releases.

## 4.0.2 - 2026-06-01

- Bumped the Angular SDK package for the `createSubItemFavorite` response fix.

## 4.0.1 - 2026-06-01

- Changed Angular peer dependencies to support Angular 19, 20, and 21.

## 4.0.0 - 2026-06-01

- Bumped the Angular SDK package for the breaking `/favorite/sub` request change.

## v2.0.1 - 2026-06-01

- Fixed the incorrect response of `createSubItemFavorite`, which should be an array.

## v2.0.0 - 2026-06-01

- Changed `/favorite/sub` from accepting `subItemId` to accepting `subItemIdList`.

## 3.0.0 - 2026-05-31

- Updated the Angular SDK to Angular 21.

## v1.15.0 - 2026-05-23

- Added `getFavoriteById`.
- Updated Angular to v19.

## v1.14.0 - 2026-05-17

- Changed request body of favorite sync API.

## v1.13.1 - 2026-05-05

- Added `itemId` to `SubItemFavorite` schema.

## v1.13.0 - 2026-05-04

- Added sync favorite API.
- Fixed favorite API changes:
  - List favorite no longer returns `status` in the response object to match the server response.
  - Changed delete favorite API from HTTP POST to HTTP DELETE.

## v1.12.1 - 2026-01-17

- Added `publicTime` to `MainItemBasic` schema.

## v1.12.0 - 2026-01-16

- Changed `MainItem` type to `MainItemBasic` in relation response.

## v1.11.1 - 2026-01-15

- Fixed duplicate `operationId` issue.

## v1.11.0 - 2026-01-15

- Added relation API.

## v1.10.0 - 2025-12-18

- Removed PropertyMapping API.
- Added `anidbKey` and `bgmKey` to `PropertyValue`.

## v1.9.0 - 2025-12-14

- Added get all property-mapping API.

## v1.8.1 - 2025-12-13

- Fixed incorrect path for progress operations.

## v1.8.0 - 2025-12-13

- Added switch to `listSubItemFavorite` operation.
- Added operations to get and update progress of a favorite.

## v1.7.0 - 2025-12-11

- Made `mainType` optional for `listMainItems` operation.

## v1.6.2 - 2025-12-07

- Changed Prediction API path to `/public/item/prediction` to avoid conflicts.

## v1.6.1 - 2025-12-07

- Fixed incorrect path for the prediction API.

## v1.6.0 - 2025-12-07

- Added prediction API for main item.

## v1.5.0 - 2025-10-28

- Moved `batch/mainItem` and `batch/subItem` APIs to the client-mapping path so both APIs require a session.

## v1.4.1 - 2025-10-24

- Fixed incorrect type of batch API response.

## v1.4.0 - 2025-10-21

- Added batch get by ID list for `MainItem` and `SubItem`.

## v1.3.1 - 2025-02-22

- Changed AddClientMapping from HTTP GET to HTTP POST.

## v1.3.0 - 2024-10-27

- Added ClientMapping API.

## v1.2.0 - 2024-10-26

- Added OAuth2 support.

## v1.1.1 - 2024-10-13

- Changed `name_cn` to `nameCn`.

## v1.1.0 - 2024-10-13

- `MainItem` and `SubItem` properties are no longer transformed with `ItemProperties`.
- Added or documented the following property types:
  - `Staff`
  - `Item`
  - `Character`
  - `Info`
  - `Cast`

## v1.0.0 - 2024-10-12

- Refactored responses to reduce the extra response object layer.
- This version is not compatible with previous versions.
- SDK version: `1.0.0`.

## v0.7.5 - 2024-10-02

- Fixed incorrect return of `listSubItemFavorite` API.
- SDK version: `0.7.5`.

## v0.7.4 - 2024-10-02

- Changed `MainItem.subItem` to `MainItem.subItems`.

## v0.7.3 - 2024-10-02

- Added `subItems` query parameter to populate `SubItems` in `getMainItemById` API.
- SDK version: `0.7.3`.

## v0.7.2 - 2024-09-29

- Updated `createFavorite` to support adding comment and rating to favorite.
- SDK version: `0.7.2`.

## v0.7.1 - 2024-09-28

- Added `reviewComment` and `rating` in payload of patch favorite API.
- SDK version: `0.7.1`.

## v0.7.0 - 2024-09-28

- Added `reviewComment` and `rating` fields in favorite.
- SDK version: `0.7.0`.

## v0.6.0 - 2024-09-28

- Added get favorite by `MainItem` ID.

## v0.5.0 - 2024-09-25

- Updated Favorite and Item APIs to transform the response object.
- SDK version: `0.5.0`.

## v0.4.0 - 2024-09-23

- Added Favorite API.
- SDK version: `0.4.0`.

## v0.3.0 - 2024-09-20

- Updated ID type from number to string to support API changes.
- SDK version: `0.3.0`.

## v0.2.1 - 2024-09-15

- Fixed incorrect response of `getMainItemById`; it should return a `MainItem` instead of an array of `MainItem`.

## v0.2.0 - 2024-09-12

- Added `name` and `name_cn` to `OnAirItem`.
- Added `getMainItemById` API.

## v0.1.1 - 2024-09-08

- Regenerated SDK.

## v0.1.0 - 2024-09-08

- First experimental release for Angular SDK.
