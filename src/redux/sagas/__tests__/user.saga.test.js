import { call } from "redux-saga/effects";
import { expectSaga, testSaga } from "redux-saga-test-plan";

import { USER_ACTION_TYPES } from "../../actions/user/user.type";

import userSaga, {
  signUpUserWatcher,
  isUserAuthenticatedWatcher,
  signCurrentUserOutWatcher,
  googleSignInWatcher,
  emailSignInWatcher,
  checkCurrentUserSession,
  signCurrentUserOut,
  signInWithGoogle,
  signUpUser,
  signInWithEmail,
} from "../user.saga";
import {
  getCurrentUser,
  signInUserByEmail,
  signInUserWithGoogle,
  signOutUser,
  signUpUserByEmail,
} from "../../../configs/firebase.config";
import {
  startEmailSignIn,
  signInSuccess,
  signOutSuccess,
  startEmailSignUp,
  signUpSuccess,
  signInFailed,
  signOutFailed,
  signUpFailed,
} from "../../actions/user/user.action";
import { throwError } from "redux-saga-test-plan/providers";

const mockDisplayName = "Test Name";
const mockEmail = "testEmail@gmail.com";
const mockPassword = "testPasword123";
const mockError = new Error("test failed!");

describe("User Sagas", () => {
  it("user saga should call watcher sagas", () => {
    testSaga(userSaga)
      .next()
      .all([
        call(isUserAuthenticatedWatcher),
        call(signCurrentUserOutWatcher),
        call(googleSignInWatcher),
        call(emailSignInWatcher),
        call(signUpUserWatcher),
      ])
      .next()
      .isDone();
  });

  it("isUserAuthenticatedWatcher should call checkCurrentUserSession saga with the latest action", () => {
    testSaga(isUserAuthenticatedWatcher)
      .next()
      .takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, checkCurrentUserSession)
      .next()
      .isDone();
  });

  it("checkCurrentUserSession saga should put signInSuccess action with current user", () => {
    return expectSaga(checkCurrentUserSession)
      .provide([
        [
          call(getCurrentUser),
          { email: mockEmail, displayName: mockDisplayName },
        ],
      ])
      .put(signInSuccess({ email: mockEmail, displayName: mockDisplayName }))
      .run();
  });

  it("checkCurrentUserSession saga should put signInFailed action", () => {
    return expectSaga(checkCurrentUserSession)
      .provide([[call(getCurrentUser), throwError(mockError)]])
      .put(signInFailed(mockError))
      .run();
  });

  it("signCurrentUserOutWatcher should call signCurrentUserOut saga with the latest action", () => {
    testSaga(signCurrentUserOutWatcher)
      .next()
      .takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signCurrentUserOut)
      .next()
      .isDone();
  });

  it("signCurrentUserOut saga should sign out user and put signOutSuccess action", () => {
    testSaga(signCurrentUserOut)
      .next()
      .call(signOutUser)
      .next()
      .put(signOutSuccess(null))
      .next()
      .isDone();
  });

  it("signCurrentUserOut saga should sign out user and put signOutFailed action", () => {
    return expectSaga(signCurrentUserOut)
      .provide([[call(signOutUser), throwError(mockError)]])
      .put(signOutFailed(mockError))
      .run();
  });

  it("googleSignInWatcher should call signInWithGoogle saga with the latest action", () => {
    testSaga(googleSignInWatcher)
      .next()
      .takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
      .next()
      .isDone();
  });

  it("signInWithGoogle saga should get google user and put signInSuccess action", () => {
    return expectSaga(signInWithGoogle)
      .provide([
        [
          call(signInUserWithGoogle),
          { email: mockEmail, displayName: mockDisplayName },
        ],
      ])
      .put(signInSuccess({ email: mockEmail, displayName: mockDisplayName }))
      .run();
  });

  it("signInWithGoogle saga should put signInFailed action", () => {
    return expectSaga(signInWithGoogle)
      .provide([[call(signInUserWithGoogle), throwError(mockError)]])
      .put(signInFailed(mockError))
      .run();
  });

  it("emailSignInWatcher should call signInWithEmail saga with the latest action", () => {
    testSaga(emailSignInWatcher)
      .next()
      .takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
      .next()
      .isDone();
  });

  it("signInWithEmail saga should put signInSuccess action with user", () => {
    return expectSaga(
      signInWithEmail,
      startEmailSignIn(mockEmail, mockPassword)
    )
      .provide([
        [
          call(signInUserByEmail, { email: mockEmail, password: mockPassword }),
          {
            email: mockEmail,
            displayName: mockDisplayName,
          },
        ],
      ])
      .put(signInSuccess({ email: mockEmail, displayName: mockDisplayName }))
      .run();
  });

  it("signInWithEmail saga should put signInFailed action", () => {
    return expectSaga(
      signInWithEmail,
      startEmailSignIn(mockEmail, mockPassword)
    )
      .provide([
        [
          call(signInUserByEmail, { email: mockEmail, password: mockPassword }),
          throwError(mockError),
        ],
      ])
      .put(signInFailed(mockError))
      .run();
  });

  it("signUpUserWatcher should call signUpUser saga with the latest action", () => {
    testSaga(signUpUserWatcher)
      .next()
      .takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, signUpUser)
      .next()
      .isDone();
  });

  it("signUpUser saga should put signUpSuccess action", () => {
    return expectSaga(
      signUpUser,
      startEmailSignUp({
        name: mockDisplayName,
        email: mockEmail,
        password: mockPassword,
      })
    )
      .provide([
        [
          call(signUpUserByEmail, {
            name: mockDisplayName,
            email: mockEmail,
            password: mockPassword,
          }),
          { name: mockDisplayName, email: mockEmail },
        ],
      ])
      .put(signUpSuccess({ name: mockDisplayName, email: mockEmail }))
      .run();
  });

  it("signUpUser saga should put signUpFailed action", () => {
    return expectSaga(
      signUpUser,
      startEmailSignUp({
        name: mockDisplayName,
        email: mockEmail,
        password: mockPassword,
      })
    )
      .provide([
        [
          call(signUpUserByEmail, {
            name: mockDisplayName,
            email: mockEmail,
            password: mockPassword,
          }),
          throwError(mockError),
        ],
      ])
      .put(signUpFailed(mockError))
      .run();
  });
});
