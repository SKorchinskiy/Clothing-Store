import { createAction } from "../create-action.helper";
import { CATEGORIES_ACTION_TYPES } from "./categories.type";

export function fetchCategoriesStart() {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
}

export function fetchCategoriesSuccess(categories) {
  return createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categories
  );
}

export function fetchCategoriesFailed(error) {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
}
