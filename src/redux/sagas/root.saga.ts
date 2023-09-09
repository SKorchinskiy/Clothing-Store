import { all, call } from "redux-saga/effects";

import userSaga from "./user.saga";
import categoriesSaga from "./categories.saga";
import categorySaga from "./category.saga";
import { SagaIterator } from "redux-saga";

function* rootSaga(): SagaIterator {
  yield all([call(userSaga), call(categoriesSaga), call(categorySaga)]);
}

export default rootSaga;
