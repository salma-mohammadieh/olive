import { createReducer, on } from '@ngrx/store';
import { User } from '../types/user.type';
import { login, logout } from './user.actions';

const userState: User = {
  isLoggedIn: true, //set to true just for development
  userData: {
    name: '',
    email: '',
    password: '',
  },
};
export const userReducer = createReducer(
  userState,
  on(login, (state, action) => {
    return { ...state, isLoggedIn: true, userData: action.userData };
  }),
  on(logout, (state, action) => {
    return {
      ...state,
      isLoggedIn: false,
      userData: { name: '', email: '', password: '' },
    };
  })
);
