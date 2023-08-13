import { createSelector } from "reselect";

export const selectUserSlice = (store) => store.user;

export const selectCurrentUser = createSelector(
  [selectUserSlice],
  (userSlice) => userSlice.currentUser
);
