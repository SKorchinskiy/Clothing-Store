import { getAllCategoriesProducts } from "../../../utils/firebase.utils";
import { createAction } from "../create-action.helper";
import { CATEGORIES_ACTION_TYPES } from "./categories.type";

function fetchCategoriesStart() {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
}

function fetchCategoriesSuccess(categories) {
  return createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categories
  );
}

function fetchCategoriesFailed(error) {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
}

export function fetchCategoriesAsync() {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categories = await getAllCategoriesProducts(5);
      dispatch(fetchCategoriesSuccess(categories));
    } catch (error) {
      dispatch(fetchCategoriesFailed(error));
    }
  };
}
