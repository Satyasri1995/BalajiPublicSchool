import { AuthState } from './../states';
import { createSelector } from '@ngrx/store';
import { AppState } from './../app.store';

export const AuthSelector = (state: AppState) => state.auth;

export const UserSelector = createSelector(
  AuthSelector,
  (state: AuthState) => state.user
);

export const AuthObjectSelector = createSelector(
  AuthSelector,
  (state: AuthState) => state.auth
);

