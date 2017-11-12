import {Action} from '@ngrx/store';
import {Company} from '../models/company';

export const LOAD = '[Company] Load';
export const LOAD_SUCCESS = '[Company] Load Success';
export const LOAD_FAIL = '[Company] Load Fail';

export class Load implements Action {
  readonly type = LOAD;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Company[]) {
  }
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;
}

export type All =
  Load
  | LoadSuccess
  | LoadFail;
