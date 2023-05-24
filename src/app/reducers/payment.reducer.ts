import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { PaymentActions } from '../actions/payment.actions';
import { BillingProfile, BillingProfileAdapter } from '../models/billing-profile.model';
import { LodgeCard } from '../models/lodge-card.model';

export interface State {
  lodgeCards: LodgeCard[];
  billingProfiles: BillingProfile[];
  isLoadingPaymentOptions: boolean;
  error: string | null;
}

const initialState: State = {
  lodgeCards: [],
  billingProfiles: [],
  isLoadingPaymentOptions: false,
  error: null,
};

const paymentReducer = createReducer(
  initialState,

  // Load features
  on(PaymentActions.loadPaymentOptions, (state: State) => ({
    ...state,
    error: null,
  })),
  on(PaymentActions.loadPaymentOptionsStart, (state: State) => ({
    ...state,
    lodgeCards: [],
    billingProfiles: [],
    isLoadingPaymentOptions: true,
  })),
  on(PaymentActions.loadPaymentOptionsSuccess, (state: State, { data }) => ({
    ...state,
    lodgeCards: data.lodgeCards,
    billingProfiles: data.billingProfiles,
    isLoadingPaymentOptions: false,
  })),
  on(PaymentActions.loadPaymentOptionsError, (state: State, { error }) => ({
    ...state,
    isLoadingPaymentOptions: false,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return paymentReducer(state, action);
}

export const getState = createFeatureSelector<State>('payment');
export const selectPaymentOptions = createSelector(getState, (state) => {
  return {
    ...state,
    billingProfiles: state.billingProfiles.map((item) => new BillingProfileAdapter().adapt(item)),
  };
});
export const selectLodgeCards = createSelector(selectPaymentOptions, (state) => state.lodgeCards);
export const selectBillingProfiles = createSelector(selectPaymentOptions, (state) => state.billingProfiles);
export const isLoadingPaymentOptions = createSelector(getState, (state) => state.isLoadingPaymentOptions);
export const hasPaymentOptionsInStore = createSelector(
  getState,
  (state) => state.billingProfiles.length > 0 && state.lodgeCards.length > 0
);
