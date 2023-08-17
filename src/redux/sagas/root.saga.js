import { all, call } from "redux-saga/effects";

import userSaga from "./user.saga";
import categoriesSaga from "./categories.saga";
import categorySaga from "./category.saga";

function* rootSaga() {
  const sliceSagas = [userSaga, categoriesSaga, categorySaga];
  yield all(sliceSagas.map(call));
}

export default rootSaga;
