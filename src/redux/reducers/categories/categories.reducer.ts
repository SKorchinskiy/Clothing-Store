import { AnyAction } from "redux";
import type { CategoryType } from "../../../components/category/category.component";

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "../../actions/categories/categories.action";
export type CategoriesState = {
  categories: CategoryType[];
  isLoading: boolean;
  error: Error | null;
};

const INITIAL_CATEGORIES_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export function categoriesReducer(
  state = INITIAL_CATEGORIES_STATE,
  action: AnyAction
) {
  if (fetchCategoriesStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      categories: action.payload,
    };
  }

  if (fetchCategoriesFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  return state;
}
