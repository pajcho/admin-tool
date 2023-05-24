import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

import { Tmc, TmcAdapter } from '../config/tmc';
import { TenantActions } from '../actions/tenant.actions';

export interface State {
  data: Tmc[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const tenantsReducer = createReducer(
  initialState,
  on(TenantActions.loadPrimaryTenants, (state: State) => ({
    ...state,
    data: [],
    error: null,
  })),
  on(TenantActions.loadPrimaryTenantsStart, (state: State) => ({
    ...state,
    loading: true,
  })),
  on(TenantActions.loadPrimaryTenantsSuccess, (state: State, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(TenantActions.loadPrimaryTenantsError, (state: State, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return tenantsReducer(state, action);
}

export const getState = createFeatureSelector<State>('tenants');
export const selectTenants = createSelector(getState, (state) => {
  return {
    ...state,
    data: state.data.map((tenant) => new TmcAdapter().adapt(tenant)),
  };
});
export const selectTenantsData = createSelector(selectTenants, (state) => state.data);
export const tenantsLoading = createSelector(getState, (state) => state.loading);
