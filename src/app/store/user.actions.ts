import { createAction, props } from '@ngrx/store';
import { User } from '../types/user.type';

export const login = createAction('[user] login', props<User>());

export const logout = createAction('[user] logout');
