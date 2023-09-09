import { AnyAction } from "redux";

import type { ProductType } from "../../../components/product-item/product-item.component";

import {
  fetchCurrentCategoryStart,
  fetchCurrentCategorySuccess,
  fetchCurrentCategoryFailed,
} from "../../actions/category/category.action";

export type CategoryState = {
  readonly title: string;
  readonly items: ProductType[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_CATEGORY_STATE: CategoryState = {
  title: "",
  items: [],
  isLoading: false,
  error: null,
};

function categoryReducer(
  state = INITIAL_CATEGORY_STATE,
  action = {} as AnyAction
) {
  if (fetchCurrentCategoryStart.match(action)) {
    return {
      ...state,
      isLoading: true,
      title: action.payload,
    };
  }

  if (fetchCurrentCategorySuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      title: action.payload.title,
      items: action.payload.items,
    };
  }

  if (fetchCurrentCategoryFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
}

export { categoryReducer };
