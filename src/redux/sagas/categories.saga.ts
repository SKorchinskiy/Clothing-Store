import { all, call, put, takeLatest } from "redux-saga/effects";

import { getAllCategoriesProducts } from "../../utils/firebase.utils";

import { CATEGORIES_ACTION_TYPES } from "../actions/categories/categories.type";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "../actions/categories/categories.action";
import { SagaIterator } from "redux-saga";

export default function* categoriesSaga() {
  yield all([call(fetchCategoriesWatcher)]);
}

function* fetchCategoriesWatcher(): SagaIterator {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategories
  );
}

function* fetchCategories(): SagaIterator {
  try {
    const categories = yield call(getAllCategoriesProducts, 5);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailed(error as Error));
  }
}
