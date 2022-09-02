import { UIState } from './../states';
import { createSelector } from '@ngrx/store';
import { AppState } from './../app.store';

export const UISelector = (state: AppState) => state.ui;

export const LoadingSelector = createSelector(
  UISelector,
  (state: UIState) => state.loading
);

export const PageSelector = createSelector(
  UISelector,
  (state: UIState) => state.page
);
