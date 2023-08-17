import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  getCurrentUser,
  signOutUser,
  signInUserWithGoogle,
  signInUserByEmail,
} from "../../configs/firebase.config";

import { USER_ACTION_TYPES } from "../actions/user/user.type";
import { signInSuccess, signInFailed } from "../actions/user/user.action";

function* userSaga() {
  const watcherSagas = [
    isUserAuthenticatedWatcher,
    signCurrentUserOutWatcher,
    googleSignInWatcher,
    emailSignInWatcher,
  ];
  yield all(watcherSagas.map(call));
}

function* isUserAuthenticatedWatcher() {
  yield takeLatest(
    USER_ACTION_TYPES.CHECK_USER_SESSION,
    checkCurrentUserSession
  );
}

function* checkCurrentUserSession() {
  try {
    const currentUser = yield call(getCurrentUser);
    yield put(signInSuccess(currentUser));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* signCurrentUserOutWatcher() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signCurrentUserOut);
}

function* signCurrentUserOut() {
  try {
    yield call(signOutUser);
    yield put(signInSuccess(null));
  } catch (error) {
    yield put(signInSuccess(error));
  }
}

function* emailSignInWatcher() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* signInWithEmail(action) {
  const { email, password } = action.payload;
  try {
    const currentUser = yield call(signInUserByEmail, { email, password });
    yield put(signInSuccess(currentUser));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* googleSignInWatcher() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* signInWithGoogle() {
  try {
    const currentUser = yield call(signInUserWithGoogle);
    yield put(signInSuccess(currentUser));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export default userSaga;
