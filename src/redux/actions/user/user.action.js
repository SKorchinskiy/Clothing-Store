import { createAction } from "../create-action.helper";

export function setCurrentUserAction(user) {
  return createAction("SET_USER", user);
}
