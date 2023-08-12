import { createAction } from "../create-action.helper";

export function setCategoriesAction(categories) {
  return createAction("SET_CATEGORIES", categories);
}
