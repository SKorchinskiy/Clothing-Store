import { USER_ACTION_TYPES } from "./user.type";
import { createAction } from "../create-action.helper";

export function setCurrentUser(user) {
  return createAction(USER_ACTION_TYPES.SET_USER, user);
}

export function checkCurrentUserSession() {
  return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
}

export function startGoogleSignIn() {
  return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
}

export function startEmailSignIn(email, password) {
  return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
    email,
    password,
  });
}

export function startEmailSignUp({ name, email, password }) {
  return createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, {
    name,
    email,
    password,
  });
}

export function startSignOut() {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
}

export function signInSuccess(currentUser) {
  return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, currentUser);
}

export function signUpSuccess(currentUser) {
  return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, currentUser);
}

export function signOutSuccess() {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS, null);
}

export function signInFailed(error) {
  return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);
}

export function signUpFailed(error) {
  return createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);
}

export function signOutFailed(error) {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
}
