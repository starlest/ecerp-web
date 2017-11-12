import {Action} from '@ngrx/store';
import {Company} from '../models/company';

export const LOAD = '[Company] Load';
export const LOAD_SUCCESS = '[Company] Load Success';
export const LOAD_FAIL = '[Company] Load Fail';
export const UPDATE = '[Company] Update';
export const UPDATE_SUCCESS = '[Company] Update Success';
export const UPDATE_FAIL = '[Company] Update Fail';

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

export class Update implements Action {
  readonly type = UPDATE;

  constructor(public payload: Company) {
  }
}

export class UpdateSuccess implements Action {
  readonly type = UPDATE_SUCCESS;

  constructor(public payload: { company: { id: string, changes: Company } }) {
  }
}

export class UpdateFail implements Action {
  readonly type = UPDATE_FAIL;
}

export type All =
  Load
  | LoadSuccess
  | LoadFail
  | Update
  | UpdateSuccess
  | UpdateFail;
