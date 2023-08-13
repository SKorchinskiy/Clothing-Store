import { createSelector } from "reselect";

const selectCategoriesSlice = (store) => store.categories;

export const selectCategories = createSelector(
  [selectCategoriesSlice],
  (categpriesSlice) => categpriesSlice.categories
);
