import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { BillingRequestActions } from '../actions/billing-requests.actions';
import { BillingRequest, BillingRequestAdapter } from '../models/billing-request.model';
import { DashboardStat } from './common.interfaces';
import { PaginationData } from '../models/pagination.model';

export interface State {
  data: BillingRequest[];
  pagination?: PaginationData;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const billingRequestsReducer = createReducer(
  initialState,
  on(BillingRequestActions.loadRequests, (state: State, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
  })),
  on(BillingRequestActions.loadRequestsStart, (state: State) => ({
    ...state,
    loading: true,
  })),
  on(BillingRequestActions.loadRequestsSuccess, (state: State, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
  })),
  on(BillingRequestActions.loadRequestsError, BillingRequestActions.changeStatusError, (state: State, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(BillingRequestActions.changeStatus, (state: State) => ({
    ...state,
    error: null,
  })),
  on(BillingRequestActions.changeStatusStart, (state: State) => ({
    ...state,
    loading: true,
  })),
  on(BillingRequestActions.changeStatusSuccess, (state: State) => ({
    ...state,
    loading: false,
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return billingRequestsReducer(state, action);
}

export const getState = createFeatureSelector<State>('billingRequests');
export const selectBillingRequests = createSelector(getState, (state) => {
  return {
    ...state,
    data: state.data.map((item) => new BillingRequestAdapter().adapt(item)),
  };
});
export const selectBillingRequestsData = createSelector(selectBillingRequests, (state) => state.data);
export const selectBillingRequestsPagination = createSelector(getState, (state) => state.pagination || {});
export const billingRequestsLoading = createSelector(getState, (state) => state.loading);
export const selectBillingRequestsStats = createSelector(getState, (state): DashboardStat => {
  return {
    loading: state.loading,
    count: state.pagination?.totalElements,
  };
});
