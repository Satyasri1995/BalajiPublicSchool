import { IUser } from './../../models/user';
import { createAction, props } from '@ngrx/store';

export const createAccount = createAction(
  '[user] create new user',
  props<{ mail: string; password: string }>()
);

export const signInUser = createAction(
  '[user] sign in into account',
  props<{ mail: string; password: string }>()
);

export const storeUser = createAction(
  '[user] save the auth object',
  props<{ user: IUser }>()
);

export const logoutUser = createAction('[user] user logout');

export const userSigned = createAction(
  '[user] marking user as signed',
  props<{ uid: string }>()
);

export const restoreSession = createAction(
  '[user] restore user session',
  props<{uid:string}>()
)
