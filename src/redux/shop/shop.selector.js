import { createSelector } from 'reselect';

const shopSelector = (state) => state.shop;

export const shopCollectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const collectionSelector = (collectionUrlParam) =>
  createSelector(
    [shopCollectionsSelector],
    (collecions) => collecions[collectionUrlParam]
  );

export const selectCollectionsForPreview = createSelector(
  [shopCollectionsSelector],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
