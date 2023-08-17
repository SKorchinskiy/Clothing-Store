import { USER_ACTION_TYPES } from "../../actions/user/user.type";

const INITIAL_USER_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export function userReducer(state = INITIAL_USER_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_USER: {
      return {
        ...state,
        isLoading: false,
        currentUser: payload,
      };
    }
    case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
    case USER_ACTION_TYPES.EMAIL_SIGN_UP_START:
    case USER_ACTION_TYPES.SIGN_OUT_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    case USER_ACTION_TYPES.SIGN_UP_SUCCESS:
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        currentUser: payload,
      };
    }
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }
    default: {
      return state;
    }
  }
}
