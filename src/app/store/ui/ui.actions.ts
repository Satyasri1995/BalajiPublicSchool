import { createAction, props } from '@ngrx/store';

export const redirectTo = createAction(
  '[Page] page redirect',
  props<{ page: string }>()
);




