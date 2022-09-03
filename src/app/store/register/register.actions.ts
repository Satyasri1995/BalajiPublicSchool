import { ISkool } from './../../models/skool';
import { createAction, props } from '@ngrx/store';

export const storeRegister = createAction(
  '[register] stores the register to store',
  props<{ skool: ISkool }>()
);

export const createRegister = createAction(
  '[register] creates a new register',
  props<{ skool: ISkool }>()
);
