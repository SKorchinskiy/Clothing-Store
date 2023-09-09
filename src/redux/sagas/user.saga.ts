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
  StartEmailSignIn,
  StartEmailSignUp,
} from "../actions/user/user.action";
import { SagaIterator } from "redux-saga";

export function* userSaga(): SagaIterator {
  yield all([
    call(isUserAuthenticatedWatcher),
    call(signCurrentUserOutWatcher),
    call(googleSignInWatcher),
    call(emailSignInWatcher),
    call(signUpUserWatcher),
  ]);
}

export function* isUserAuthenticatedWatcher(): SagaIterator {
  yield takeLatest(
    USER_ACTION_TYPES.CHECK_USER_SESSION,
    checkCurrentUserSession
  );
}

export function* checkCurrentUserSession(): SagaIterator {
  try {
    const currentUser = yield call(getCurrentUser);
    yield put(signInSuccess(currentUser));
  } catch (error) {
    yield put(signInFailed(error as Error));
  }
}

export function* signCurrentUserOutWatcher(): SagaIterator {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signCurrentUserOut);
}

export function* signCurrentUserOut(): SagaIterator {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error as Error));
  }
}

export function* emailSignInWatcher(): SagaIterator {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* signInWithEmail(action: StartEmailSignIn): SagaIterator {
  const { email, password } = action.payload;
  try {
    const currentUser = yield call(signInUserByEmail, { email, password });
    yield put(signInSuccess(currentUser));
  } catch (error) {
    yield put(signInFailed(error as Error));
  }
}

export function* googleSignInWatcher(): SagaIterator {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithGoogle(): SagaIterator {
  try {
    const currentUser = yield call(signInUserWithGoogle);
    yield put(signInSuccess(currentUser));
  } catch (error) {
    yield put(signInFailed(error as Error));
  }
}

export function* signUpUserWatcher(): SagaIterator {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, signUpUser);
}

export function* signUpUser(action: StartEmailSignUp): SagaIterator {
  try {
    const currentUser = yield call(signUpUserByEmail, action.payload);
    yield put(signUpSuccess(currentUser));
  } catch (error) {
    yield put(signUpFailed(error as Error));
  }
}

export default userSaga;
