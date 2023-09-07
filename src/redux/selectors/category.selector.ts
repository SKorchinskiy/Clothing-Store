import { createSelector } from "reselect";
import { CategoryState } from "../reducers/category/category.reducer";
import { RootState } from "../store/store";

const selectCategorySlice = (state: RootState): CategoryState => state.category;

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
