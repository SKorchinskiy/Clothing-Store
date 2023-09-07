import { USER_ACTION_TYPES } from "./user.type";
import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../create-action.helper";
import { User } from "../../reducers/user/user.reducer";

export type SignInUser = {
  email: string;
  password: string;
};

export type SignUpUser = SignInUser & { name: string };

export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  User
>;

export const setCurrentUser = withMatcher(
  (user: User): SetCurrentUser =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);

export type CheckCurrentUserSession =
  Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export const checkCurrentUserSession = withMatcher(
  (): CheckCurrentUserSession =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export type StartGoogleSignIn = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export const startGoogleSignIn = withMatcher(
  (): StartGoogleSignIn => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export type StartEmailSignIn = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  SignInUser
>;

export const startEmailSignIn = withMatcher(
  (email: string, password: string): StartEmailSignIn =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
      email,
      password,
    })
);

export type StartEmailSignUp = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_UP_START,
  SignUpUser
>;

export const startEmailSignUp = withMatcher(
  (data: SignUpUser): StartEmailSignUp =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, data)
);

export type StartSignOut = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export const startSignOut = withMatcher(
  (): StartSignOut => createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  User
>;

export const signInSuccess = withMatcher(
  (currentUser: User): SignInSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, currentUser)
);

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  User
>;

export const signUpSuccess = withMatcher(
  (currentUser: User): SignUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, currentUser)
);

export type SignOutSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_SUCCESS,
  null
>;

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS, null)
);

export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export type SignUpFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);

export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>;

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);
