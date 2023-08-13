import { createSelector } from "reselect";

const selectUserSlice = (store) => store.user;

export const selectCurrentUser = createSelector(
  [selectUserSlice],
  (userSlice) => userSlice.currentUser
);
