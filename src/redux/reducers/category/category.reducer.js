import { CATEGORY_ACTION_TYPES } from "../../actions/category/category.type";

const INITIAL_CATEGORY_STATE = {
  title: "",
  items: [],
  isLoading: false,
  error: null,
};

function categoryReducer(state = INITIAL_CATEGORY_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_START: {
      return {
        ...state,
        isLoading: true,
        title: payload,
      };
    }
    case CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        title: payload.title,
        items: payload.items,
      };
    }
    case CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_FAILED: {
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

export { categoryReducer };
