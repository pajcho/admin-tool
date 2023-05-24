import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

import { BookingChannelsAdapter, BookingChannelsResponse, CheckoutOptions } from '../models/checkout-options.model';
import { CheckoutActions } from '../actions/checkout.actions';

export interface State {
  checkoutOptions: {
    paymentOptions: CheckoutOptions['paymentOptions'];
    project: CheckoutOptions['project'];
    purposeOfTrip: CheckoutOptions['purposeOfTrip'];
    yourReference: CheckoutOptions['yourReference'];
    isLoading: boolean;
    error: string | null;
  };
  bookingChannels: {
    items: BookingChannelsResponse;
    isLoading: boolean;
    error: string | null;
  };
}

const initialState: State = {
  checkoutOptions: {
    paymentOptions: [],
    project: null,
    purposeOfTrip: null,
    yourReference: null,
    isLoading: false,
    error: null,
  },
  bookingChannels: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const checkoutReducer = createReducer(
  initialState,

  // Load checkout options
  on(CheckoutActions.loadOptions, (state: State) => ({
    ...state,
    checkoutOptions: {
      ...state.checkoutOptions,
      error: null,
    },
  })),
  on(CheckoutActions.loadOptionsStart, (state: State) => ({
    ...state,
    checkoutOptions: {
      ...initialState.checkoutOptions,
      error: state.checkoutOptions.error,
    },
  })),
  on(CheckoutActions.loadOptionsSuccess, (state: State, { data }) => {
    return {
      ...state,
      checkoutOptions: {
        ...state.checkoutOptions,
        paymentOptions: data.paymentOptions,
        project: data.project || initialState.checkoutOptions.project,
        purposeOfTrip: data.purposeOfTrip || initialState.checkoutOptions.purposeOfTrip,
        yourReference: data.yourReference || initialState.checkoutOptions.yourReference,
        isLoading: false,
      },
    };
  }),
  on(CheckoutActions.loadOptionsError, (state: State, { error }) => ({
    ...state,
    checkoutOptions: {
      ...state.checkoutOptions,
      isLoading: false,
      error,
    },
  })),

  // Load booking channels
  on(CheckoutActions.loadBookingChannels, (state: State) => ({
    ...state,
    bookingChannels: {
      ...state.bookingChannels,
      error: null,
    },
  })),
  on(CheckoutActions.loadBookingChannelsStart, (state: State) => ({
    ...state,
    bookingChannels: {
      ...initialState.bookingChannels,
      isLoading: true,
      error: state.bookingChannels.error,
    },
  })),
  on(CheckoutActions.loadBookingChannelsSuccess, (state: State, { data }) => {
    return {
      ...state,
      bookingChannels: {
        items: data,
        isLoading: false,
        error: null,
      },
    };
  }),
  on(CheckoutActions.loadBookingChannelsError, (state: State, { error }) => ({
    ...state,
    bookingChannels: {
      ...state.bookingChannels,
      isLoading: false,
      error,
    },
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return checkoutReducer(state, action);
}

export const getState = createFeatureSelector<State>('checkout');
export const selectCheckoutOptions = createSelector(getState, (state) => state.checkoutOptions);
export const selectCheckoutPaymentOptions = createSelector(selectCheckoutOptions, (state) => state.paymentOptions);
export const selectProject = createSelector(selectCheckoutOptions, (state) => state.project);
export const selectPurposeOfTrip = createSelector(selectCheckoutOptions, (state) => state.purposeOfTrip);
export const selectYourReference = createSelector(selectCheckoutOptions, (state) => state.yourReference);
export const isLoadingCheckoutOptions = createSelector(selectCheckoutOptions, (state) => state.isLoading);
export const hasMandatoryReferenceFields = createSelector(
  selectCheckoutOptions,
  (state) => !!state.project?.mandatory || !!state.purposeOfTrip?.mandatory || !!state.yourReference?.mandatory
);

// We have to have at least one payment option and if it exists then the checkout options are loaded
export const hasCheckoutOptionsInStore = createSelector(selectCheckoutPaymentOptions, (options) => !!options.length);

export const selectBookingChannels = createSelector(getState, (state) =>
  state.bookingChannels.items.map((item) => new BookingChannelsAdapter().adapt(item))
);
export const isLoadingBookingChannels = createSelector(getState, (state) => state.bookingChannels.isLoading);

// We have to have at least one payment option and if it exists then the checkout options are loaded
export const hasBookingChannelsInStore = createSelector(getState, (state) => !!state.bookingChannels.items.length);
