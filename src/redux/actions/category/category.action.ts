import { createAction, withMatcher } from "../create-action.helper";
import { ActionWithPayload } from "../create-action.helper";
import type { Category } from "./category.type";
import { CATEGORY_ACTION_TYPES } from "./category.type";

export type FetchCategoryStart = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_START,
  string
>;

export const fetchCurrentCategoryStart = withMatcher(
  (categoryName: string): FetchCategoryStart =>
    createAction(
      CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_START,
      categoryName
    )
);

export type FetchCategorySuccess = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_SUCCESS,
  Category
>;

export const fetchCurrentCategorySuccess = withMatcher(
  (category: Category): FetchCategorySuccess =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_SUCCESS, category)
);

export type FetchCategoryFailed = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_FAILED,
  Error
>;

export const fetchCurrentCategoryFailed = withMatcher(
  (error: Error): FetchCategoryFailed =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_FAILED, error)
);
