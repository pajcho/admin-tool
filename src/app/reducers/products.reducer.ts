import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Product, ProductAdapter } from '../models/product.model';
import { DashboardStat } from './common.interfaces';
import { PaginationData } from '../models/pagination.model';
import { ProductActions } from '../actions/products.actions';

export interface State {
  data: Product[];
  pagination?: PaginationData;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const productsReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, (state: State, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
  })),
  on(
    ProductActions.loadProductsStart,
    ProductActions.toggleProductStatusStart,
    ProductActions.saveProductDetailsStart,
    (state: State) => ({
      ...state,
      loading: true,
    })
  ),
  on(ProductActions.loadProductsSuccess, (state: State, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
  })),
  on(ProductActions.loadProductsError, ProductActions.toggleProductStatusError, (state: State, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Save details
  on(ProductActions.toggleProductStatus, ProductActions.saveProductDetails, (state: State) => ({
    ...state,
    error: null,
  })),
  on(ProductActions.saveProductDetailsSuccess, ProductActions.toggleProductStatusSuccess, (state: State) => ({
    ...state,
    loading: false,
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return productsReducer(state, action);
}

export const getState = createFeatureSelector<State>('products');
export const selectProducts = createSelector(getState, (state: State) => {
  return {
    ...state,
    data: state.data.map((item) => new ProductAdapter().adapt(item)),
  };
});
export const selectProductsData = createSelector(selectProducts, (state) => state.data);
export const selectProductsPagination = createSelector(getState, (state) => state.pagination || {});
export const productsLoading = createSelector(getState, (state) => state.loading);
export const selectProductsStats = createSelector(
  getState,
  (state): DashboardStat => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
  })
);
