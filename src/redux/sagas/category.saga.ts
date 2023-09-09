import { all, call, put, takeLatest } from "redux-saga/effects";

import { getProductsFromCategory } from "../../utils/firebase.utils";

import { CATEGORY_ACTION_TYPES } from "../actions/category/category.type";
import {
  fetchCurrentCategorySuccess,
  fetchCurrentCategoryFailed,
} from "../actions/category/category.action";
import { SagaIterator } from "redux-saga";

import type { FetchCategoryStart } from "../actions/category/category.action";

export default function* categorySaga(): SagaIterator {
  yield all([call(fetchCurrentCategoryWatcher)]);
}

function* fetchCurrentCategoryWatcher(): SagaIterator {
  yield takeLatest(
    CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_START,
    fetchCurrentCategory
  );
}

function* fetchCurrentCategory(action: FetchCategoryStart): SagaIterator {
  const categoryName = action.payload;
  try {
    const category = yield call(getProductsFromCategory, categoryName);
    yield put(fetchCurrentCategorySuccess(category));
  } catch (error) {
    yield put(fetchCurrentCategoryFailed(error as Error));
  }
}
