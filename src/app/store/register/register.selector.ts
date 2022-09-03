import { RegisterState } from './../states';
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.store';

export const RegisterSelector = (state: AppState) => state.register;

export const RegisterIdSelector = createSelector(
  RegisterSelector,
  (state: RegisterState) => state.id
);
