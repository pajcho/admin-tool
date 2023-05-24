import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { VendorsPaymentProvider, VendorsPaymentProviderAdapter } from '../models/vendors-payment-provider.model';
import { DashboardStat } from './common.interfaces';
import { PaginationData } from '../models/pagination.model';
import { VendorsPaymentProviderActions } from '../actions/vendors-payment-providers.actions';

export interface State {
  data: VendorsPaymentProvider[];
  pagination?: PaginationData;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const vendorsPaymentProvidersReducer = createReducer(
  initialState,
  on(VendorsPaymentProviderActions.loadVendorsPaymentProviders, (state: State, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
  })),
  on(
    VendorsPaymentProviderActions.loadVendorsPaymentProvidersStart,
    VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatusStart,
    VendorsPaymentProviderActions.saveVendorsPaymentProviderDetailsStart,
    (state: State) => ({
      ...state,
      loading: true,
    })
  ),
  on(VendorsPaymentProviderActions.loadVendorsPaymentProvidersSuccess, (state: State, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
  })),
  on(
    VendorsPaymentProviderActions.loadVendorsPaymentProvidersError,
    VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatusError,
    (state: State, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  ),

  // Save details
  on(
    VendorsPaymentProviderActions.saveVendorsPaymentProviderDetails,
    VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatus,
    (state: State) => ({
      ...state,
      error: null,
    })
  ),
  on(
    VendorsPaymentProviderActions.saveVendorsPaymentProviderDetailsSuccess,
    VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatusSuccess,
    (state: State) => ({
      ...state,
      loading: false,
    })
  )
);

export function reducer(state: State | undefined, action: Action): State {
  return vendorsPaymentProvidersReducer(state, action);
}

export const getState = createFeatureSelector<State>('vendorsPaymentProviders');
export const selectVendorsPaymentProviders = createSelector(getState, (state: State) => {
  return {
    ...state,
    data: state.data.map((item) => new VendorsPaymentProviderAdapter().adapt(item)),
  };
});
export const selectVendorsPaymentProvidersData = createSelector(selectVendorsPaymentProviders, (state) => state.data);
export const selectVendorsPaymentProvidersPagination = createSelector(getState, (state) => state.pagination || {});
export const vendorsPaymentProviderLoading = createSelector(getState, (state) => state.loading);
export const selectVendorsPaymentProvidersStats = createSelector(
  getState,
  (state): DashboardStat => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
  })
);
