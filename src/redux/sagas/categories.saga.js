import { all, call, put, takeLatest } from "redux-saga/effects";

import { getAllCategoriesProducts } from "../../utils/firebase.utils";

import { CATEGORIES_ACTION_TYPES } from "../actions/categories/categories.type";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "../actions/categories/categories.action";

export default function* categoriesSaga() {
  const watcherSagas = [fetchCategoriesWatcher];
  yield all(watcherSagas.map(call));
}

function* fetchCategoriesWatcher() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategories
  );
}

function* fetchCategories() {
  try {
    const categories = yield getAllCategoriesProducts(5);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}
