import { createAction } from "../create-action.helper";
import { CATEGORIES_ACTION_TYPES } from "./categories.type";

export function setCategoriesAction(categories) {
  return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
}
