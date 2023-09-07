import { createSelector } from "reselect";
import { UserState } from "../reducers/user/user.reducer";
import { RootState } from "../store/store";

const selectUserSlice = (store: RootState): UserState => store.user;

export const selectCurrentUser = createSelector(
  [selectUserSlice],
  (userSlice) => userSlice.currentUser
);
