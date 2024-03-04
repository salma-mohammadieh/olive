import { createSelector } from '@ngrx/store';
import { User } from '../types/user.type';

// Define a selector function to access the user slice of state
export const selectUserState = (state: { user: User }) => state.user;

// Define your selector to get the isLoggedIn property from the user state
export const selectUserStatus = createSelector(
  selectUserState,
  (user: User) => user.isLoggedIn
);
