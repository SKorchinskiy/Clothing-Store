import { CATEGORIES_ACTION_TYPES } from "../../actions/categories/categories.type";

const INITIAL_CATEGORIES_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export function categoriesReducer(state = INITIAL_CATEGORIES_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        categories: payload,
      };
    }
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }
    default: {
      return state;
    }
  }
}
