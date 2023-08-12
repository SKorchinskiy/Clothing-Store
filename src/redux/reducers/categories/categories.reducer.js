import { CATEGORIES_ACTION_TYPES } from "../../actions/categories/categories.type";

const INITIAL_CATEGORIES_STATE = {
  categories: {},
};

export function categoriesReducer(state = INITIAL_CATEGORIES_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES: {
      return {
        ...state,
        categories: payload,
      };
    }
    default: {
      return state;
    }
  }
}
