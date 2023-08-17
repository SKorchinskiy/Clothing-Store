import { createAction } from "../create-action.helper";

import { CATEGORY_ACTION_TYPES } from "./category.type";

export function fetchCurrentCategoryStart(categoryName) {
  return createAction(
    CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_START,
    categoryName
  );
}

export function fetchCurrentCategorySuccess(category) {
  return createAction(
    CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_SUCCESS,
    category
  );
}

export function fetchCurrentCategoryFailed(error) {
  return createAction(
    CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_FAILED,
    error
  );
}
