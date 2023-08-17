import { all, call, put, takeLatest } from "redux-saga/effects";

import { getProductsFromCategory } from "../../utils/firebase.utils";

import { CATEGORY_ACTION_TYPES } from "../actions/category/category.type";
import {
  fetchCurrentCategorySuccess,
  fetchCurrentCategoryFailed,
} from "../actions/category/category.action";

export default function* categorySaga() {
  const watcherSagas = [fetchCurrentCategoryWatcher];
  yield all(watcherSagas.map(call));
}

function* fetchCurrentCategoryWatcher() {
  yield takeLatest(
    CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_START,
    fetchCurrentCategory
  );
}

function* fetchCurrentCategory(action) {
  const categoryName = action.payload;
  try {
    const category = yield getProductsFromCategory(categoryName);
    yield put(fetchCurrentCategorySuccess(category));
  } catch (error) {
    yield put(fetchCurrentCategoryFailed(error));
  }
}
