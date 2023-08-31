import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  getCurrentUser,
  signOutUser,
  signInUserWithGoogle,
  signInUserByEmail,
  signUpUserByEmail,
} from "../../configs/firebase.config";

import { USER_ACTION_TYPES } from "../actions/user/user.type";
import {
  signInSuccess,
  signInFailed,
  signUpFailed,
  signUpSuccess,
  signOutSuccess,
  signOutFailed,
} from "../actions/user/user.action";

export function* userSaga() {
  const watcherSagas = [
    isUserAuthenticatedWatcher,
    signCurrentUserOutWatcher,
    googleSignInWatcher,
    emailSignInWatcher,
    signUpUserWatcher,
  ];

  yield all(watcherSagas.map((saga) => call(saga)));
}

export function* isUserAuthenticatedWatcher() {
  yield takeLatest(
    USER_ACTION_TYPES.CHECK_USER_SESSION,
    checkCurrentUserSession
  );
}

export function* checkCurrentUserSession() {
  try {
    const currentUser = yield call(getCurrentUser);
    yield put(signInSuccess(currentUser));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signCurrentUserOutWatcher() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signCurrentUserOut);
}

export function* signCurrentUserOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess(null));
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* emailSignInWatcher() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* signInWithEmail(action) {
  const { email, password } = action.payload;
  try {
    const currentUser = yield call(signInUserByEmail, { email, password });
    yield put(signInSuccess(currentUser));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* googleSignInWatcher() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithGoogle() {
  try {
    const currentUser = yield call(signInUserWithGoogle);
    yield put(signInSuccess(currentUser));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUpUserWatcher() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, signUpUser);
}

export function* signUpUser(action) {
  try {
    const currentUser = yield call(signUpUserByEmail, action.payload);
    yield put(signUpSuccess(currentUser));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export default userSaga;
