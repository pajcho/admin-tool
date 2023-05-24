import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { VatCategory, VatCategoryAdapter } from '../models/vat-category.model';
import { DashboardStat } from './common.interfaces';
import { PaginationData } from '../models/pagination.model';
import { VatCategoryActions } from '../actions/vat-categories.actions';

export interface State {
  data: VatCategory[];
  pagination?: PaginationData;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const vatCategoriesReducer = createReducer(
  initialState,

  // Load vat categories
  on(VatCategoryActions.loadVatCategories, (state: State, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
  })),
  on(
    VatCategoryActions.loadVatCategoriesStart,
    VatCategoryActions.toggleVatCategoryStatusStart,
    VatCategoryActions.saveVatCategoryDetailsStart,
    (state: State) => ({
      ...state,
      loading: true,
    })
  ),
  on(VatCategoryActions.loadVatCategoriesSuccess, (state: State, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
  })),
  on(
    VatCategoryActions.loadVatCategoriesError,
    VatCategoryActions.toggleVatCategoryStatusError,
    (state: State, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  ),

  // Toggle state
  on(VatCategoryActions.toggleVatCategoryStatus, VatCategoryActions.saveVatCategoryDetails, (state: State) => ({
    ...state,
    error: null,
  })),

  // Save and Toggle
  on(
    VatCategoryActions.saveVatCategoryDetailsSuccess,
    VatCategoryActions.toggleVatCategoryStatusSuccess,
    (state: State) => ({
      ...state,
      loading: false,
    })
  )
);

export function reducer(state: State | undefined, action: Action): State {
  return vatCategoriesReducer(state, action);
}

export const getState = createFeatureSelector<State>('vatCategories');
export const selectVatCategories = createSelector(getState, (state: State) => {
  return {
    ...state,
    data: state.data.map((item) => new VatCategoryAdapter().adapt(item)),
  };
});
export const selectVatCategoriesData = createSelector(selectVatCategories, (state) => state.data);
export const selectVatCategoriesPagination = createSelector(getState, (state) => state.pagination || {});
export const vatCategoriesLoading = createSelector(getState, (state) => state.loading);
export const selectVatCategoriesStats = createSelector(
  getState,
  (state): DashboardStat => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
  })
);
