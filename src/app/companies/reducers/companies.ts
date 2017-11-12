import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {LoadSuccess} from '../actions/company';

import * as CompanyActions from '../actions/company';
import {Company} from '../models/company';

export interface State extends EntityState<Company> {
  loaded: boolean;
  loading: boolean;
}

export const adapter: EntityAdapter<Company> = createEntityAdapter<Company>({
  sortComparer: false,
});

const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
});

export function reducer(state = initialState,
                        action: CompanyActions.All): State {
  switch (action.type) {
    case CompanyActions.LOAD: {
      return {
        ...state,
        loaded: false,
        loading: true,
      };
    }

    case CompanyActions.LOAD_SUCCESS: {
      const loadSuccessAction = action as LoadSuccess;
      return adapter.addAll(loadSuccessAction.payload, {...state, loaded: true, loading: false});
    }

    case CompanyActions.LOAD_FAIL: {
      return adapter.removeAll({...state, loaded: true, loading: false});
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
