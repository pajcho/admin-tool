import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { FlightPNRValidation, FlightPNRValidationAdapter } from '../models/pnr.model';
import { PnrActions } from '../actions/pnr.actions';

export interface State {
  data: FlightPNRValidation;
  additionalData: { vendorId: string; productId: string };
  validating: boolean;
  confirming: boolean;
  cartId: string;
  error: string | null;
}

const initialState: State = {
  data: null,
  additionalData: null,
  validating: false,
  confirming: false,
  cartId: null,
  error: null,
};

const pnrReducer = createReducer(
  initialState,

  on(PnrActions.validateFlightPnr, (state: State) => ({ ...state, data: null, error: null })),
  on(PnrActions.validateFlightPnrStart, (state: State) => ({ ...state, validating: true })),
  on(PnrActions.validateFlightPnrSuccess, (state: State, { data }) => ({ ...state, data, validating: false })),
  on(PnrActions.validateFlightPnrError, (state: State, { error }) => ({ ...state, validating: false, error })),

  on(PnrActions.setFlightFinalDestination, (state: State, { destination }) => ({
    ...state,
    data: { ...state.data, finalDestination: destination },
  })),

  on(PnrActions.confirmFlightPnr, (state: State) => ({ ...state, cartId: null, error: null })),
  on(PnrActions.confirmFlightPnrStart, (state: State) => ({ ...state, confirming: true })),
  on(PnrActions.confirmFlightPnrSuccess, (state: State, { data }) => ({
    ...state,
    cartId: data.cartId,
    confirming: false,
  })),
  on(PnrActions.confirmFlightPnrError, (state: State, { error }) => ({ ...state, confirming: false, error })),

  on(PnrActions.resetValidatedPnr, (state: State) => ({ ...state, data: null, additionalData: null, cartId: null })),
  on(PnrActions.saveAdditionalValidationData, (state: State, { data }) => ({ ...state, additionalData: data }))
);

export function reducer(state: State | undefined, action: Action): State {
  return pnrReducer(state, action);
}

export const getState = createFeatureSelector<State>('pnr');
export const selectPNR = createSelector(getState, (state: State) => {
  return {
    ...state,
    data: new FlightPNRValidationAdapter().adapt(state.data),
  };
});
export const selectPNRData = createSelector(selectPNR, ({ data }) => data);
export const selectAdditionalPNRData = createSelector(selectPNR, ({ additionalData }) => additionalData);
export const isValidatingPNR = createSelector(getState, (state) => !!state.validating);
export const selectPNRCartId = createSelector(getState, ({ cartId }) => cartId);
export const isConfirmingPNR = createSelector(getState, (state) => !!state.confirming);
