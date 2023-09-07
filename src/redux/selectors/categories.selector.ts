import { createSelector } from "reselect";
import { CategoriesState } from "../reducers/categories/categories.reducer";
import { RootState } from "../store/store";

const selectCategoriesSlice = (store: RootState): CategoriesState =>
  store.categories;

export const selectCategories = createSelector(
  [selectCategoriesSlice],
  (categpriesSlice) => categpriesSlice.categories
);

export const selectIsLoading = createSelector(
  [selectCategoriesSlice],
  (categoriesSlice) => categoriesSlice.isLoading
);
