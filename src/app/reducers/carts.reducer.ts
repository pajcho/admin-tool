import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { CartActions } from '../actions/carts.actions';
import { addOrUpdate } from './helpers';
import { Cart, CartAdapter, CartModel } from '../models/cart.model';

export interface State {
  data: Cart[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const cartsReducer = createReducer(
  initialState,

  on(CartActions.loadCartDetails, (state: State) => ({ ...state, error: null })),
  on(CartActions.loadCartDetailsSuccess, (state: State, { data }) => ({
    ...state,
    data: addOrUpdate(state, data),
    loading: false,
  })),
  on(CartActions.loadCartDetailsStart, (state: State) => ({ ...state, loading: true })),
  on(CartActions.loadCartDetailsError, (state: State, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return cartsReducer(state, action);
}

export const getState = createFeatureSelector<State>('carts');
export const selectCarts = createSelector(getState, (state: State) => {
  return {
    ...state,
    data: state.data.map((item) => new CartAdapter().adapt(item)),
  };
});
export const selectCartsData = createSelector(selectCarts, (state) => state.data);
export const cartsLoading = createSelector(getState, (state: State) => state.loading);
export const selectCartById = (id: Cart['id']) => {
  return createSelector(selectCarts, (state): CartModel => {
    return state.data.find((item) => item.id === id) || new CartAdapter().adapt({});
  });
};
