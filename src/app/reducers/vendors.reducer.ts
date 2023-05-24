import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Vendor, VendorAdapter } from '../models/vendor.model';
import { DashboardStat } from './common.interfaces';
import { PaginationData } from '../models/pagination.model';
import { VendorActions } from '../actions/vendors.actions';

export interface State {
  data: Vendor[];
  pagination?: PaginationData;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const vendorsReducer = createReducer(
  initialState,

  // Load vendors
  on(VendorActions.loadVendors, (state: State, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
  })),
  on(VendorActions.loadVendorsSuccess, (state: State, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
  })),

  // Save and Delete
  on(
    VendorActions.saveVendorDetailsSuccess,
    VendorActions.toggleVendorStatusSuccess,
    VendorActions.deleteVendorSuccess,
    (state: State) => ({
      ...state,
      loading: false,
    })
  ),

  // Base actions handling
  on(VendorActions.saveVendorDetails, VendorActions.toggleVendorStatus, VendorActions.deleteVendor, (state: State) => ({
    ...state,
    error: null,
  })),

  // Start actions handling
  on(
    VendorActions.loadVendorsStart,
    VendorActions.toggleVendorStatusStart,
    VendorActions.saveVendorDetailsStart,
    VendorActions.deleteVendorStart,
    (state: State) => ({
      ...state,
      loading: true,
    })
  ),

  // Error actions handling
  on(
    VendorActions.loadVendorsError,
    VendorActions.toggleVendorStatusError,
    VendorActions.saveVendorDetailsError,
    VendorActions.deleteVendorError,
    (state: State, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  )
);

export function reducer(state: State | undefined, action: Action): State {
  return vendorsReducer(state, action);
}

export const getState = createFeatureSelector<State>('vendors');
export const selectVendors = createSelector(getState, (state) => {
  return {
    ...state,
    data: state.data.map((item) => new VendorAdapter().adapt(item)),
  };
});
export const selectVendorsData = createSelector(selectVendors, (state) => state.data);
export const vendorsLoading = createSelector(getState, (state) => state.loading);
export const selectVendorsStats = createSelector(
  getState,
  (state): DashboardStat => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
  })
);
