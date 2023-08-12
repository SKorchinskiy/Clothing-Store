import { USER_ACTION_TYPES } from "../../actions/user/user.type";

const INITIAL_USER_STATE = {
  currentUser: null,
};

export function userReducer(state = INITIAL_USER_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_USER: {
      return {
        ...state,
        currentUser: payload,
      };
    }
    default: {
      return state;
    }
  }
}
