import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Tmc, TmcAdapter } from './tmc.model';
import { TmcActions } from "./tmc.actions";

export interface State {
  tmc: Tmc;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  tmc: null,
  loading: false,
  error: null,
};

const tmcReducer = createReducer(
  initialState,
  on(TmcActions.setTmc, (state: State, { tmc }) => ({
    ...state,
    tmc,
    loading: false,
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return tmcReducer(state, action);
}

export const getState = createFeatureSelector<State>('tmc');
export const tmc = createSelector(getState, (state: State) => new TmcAdapter().adapt(state.tmc));
export const isTmcLoading = createSelector(getState, (state: State) => state.loading);
