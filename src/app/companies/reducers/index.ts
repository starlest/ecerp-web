import {createSelector, createFeatureSelector} from '@ngrx/store';
import * as fromCompanies from './companies';
import * as fromRoot from '../../reducers';

export interface CompaniesState {
  companies: fromCompanies.State;
}

export interface State extends fromRoot.State {
  'companies': CompaniesState;
}

export const reducers = {
  companies: fromCompanies.reducer,
};

export const getCompaniesState = createFeatureSelector<CompaniesState>('companies');

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const getCompanyEntitiesState = createSelector(
  getCompaniesState,
  (state: CompaniesState) => state.companies,
);

export const getCompanyEntitiesLoaded = createSelector(
  getCompanyEntitiesState,
  fromCompanies.getLoaded,
);


export const getCompanyEntitiesLoading = createSelector(
  getCompanyEntitiesState,
  fromCompanies.getLoading,
);

export const {
  selectIds: getCompanyIds,
  selectEntities: getCompanyEntities,
  selectAll: getAllCompanies,
  selectTotal: getTotalCompanies,
} = fromCompanies.adapter.getSelectors(getCompanyEntitiesState);

