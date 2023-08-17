import { createSelector } from "reselect";

const selectCategorySlice = (state) => state.category;

export const selectCategoryTitle = createSelector(
  [selectCategorySlice],
  (category) => category.title
);

export const selectCategoryItems = createSelector(
  [selectCategorySlice],
  (category) => category.items
);

export const selectIsCategoryLoading = createSelector(
  [selectCategorySlice],
  (category) => category.isLoading
);
