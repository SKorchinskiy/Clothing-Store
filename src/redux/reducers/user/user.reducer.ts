import { AnyAction } from "redux";

import {
  setCurrentUser,
  startEmailSignIn,
  startEmailSignUp,
  startGoogleSignIn,
  startSignOut,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from "../../actions/user/user.action";

export type User = {
  displayName: string;
  email: string;
};

export type UserState = {
  readonly currentUser: User | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_USER_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export function userReducer(state = INITIAL_USER_STATE, action: AnyAction) {
  if (setCurrentUser.match(action)) {
    return {
      ...state,
      isLoading: false,
      currentUser: action.payload,
    };
  }

  if (
    startEmailSignIn.match(action) ||
    startGoogleSignIn.match(action) ||
    startEmailSignUp.match(action) ||
    startSignOut.match(action)
  ) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (
    signInSuccess.match(action) ||
    signUpSuccess.match(action) ||
    signOutSuccess.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
      currentUser: action.payload,
    };
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  return state;
}
