import { createSelector } from 'reselect';

const userState = (state) => state.user;

export const selectCurrentUser = createSelector(
  [userState],
  (user) => user.currentUser
);
