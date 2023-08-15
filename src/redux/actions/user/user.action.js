import { USER_ACTION_TYPES } from "./user.type";
import { createAction } from "../create-action.helper";
import {
  signInUserWithGoogle,
  signInUserByEmail,
  signUpUserByEmail,
  signOutUser,
} from "../../../configs/firebase.config";

export function setCurrentUser(user) {
  return createAction(USER_ACTION_TYPES.SET_USER, user);
}

function fetchCurrentUserStart() {
  return createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_START);
}

function fetchCurrentUserSuccess(currentUser) {
  return createAction(
    USER_ACTION_TYPES.FETCH_CURRENT_USER_SUCCESS,
    currentUser
  );
}

function fetchCurrentUserFailed(error) {
  return createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_FAILED, error);
}

export function startEmailSignUp({ name, email, password }) {
  return async (dispatch) => {
    dispatch(fetchCurrentUserStart());
    try {
      const currentUser = await signUpUserByEmail({ name, email, password });
      dispatch(fetchCurrentUserSuccess(currentUser));
    } catch (error) {
      dispatch(fetchCurrentUserFailed(error));
    }
  };
}

export function startGoogleSignIn() {
  return async (dispatch) => {
    dispatch(fetchCurrentUserStart());
    try {
      const currentUser = await signInUserWithGoogle();
      dispatch(fetchCurrentUserSuccess(currentUser));
    } catch (error) {
      dispatch(fetchCurrentUserFailed(error));
    }
  };
}

export function startEmailSignIn(email, password) {
  return async (dispatch) => {
    dispatch(fetchCurrentUserStart);
    try {
      const currentUser = await signInUserByEmail(email, password);
      dispatch(fetchCurrentUserSuccess(currentUser));
    } catch (error) {
      dispatch(fetchCurrentUserFailed(error));
    }
  };
}

export function signOutCurrentUserAsync() {
  return async (dispatch) => {
    dispatch(fetchCurrentUserStart());
    try {
      await signOutUser();
      dispatch(setCurrentUser(null));
    } catch (error) {
      dispatch(fetchCurrentUserFailed(error));
    }
  };
}
