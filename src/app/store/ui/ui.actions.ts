import { createAction, props } from '@ngrx/store';

export const redirectTo = createAction(
  '[Page] page redirect',
  props<{ page: string }>()
);

export const dismissModal = createAction('[modal] dismisses the current modal');

export const toggleLoading = createAction(
  '[loading] toggle loading',
  props<{ loading: boolean }>()
);

export const toggleSplashScreen = createAction(
  '[splash screen] toggling splash screen',
  props<{ display: boolean }>()
);
