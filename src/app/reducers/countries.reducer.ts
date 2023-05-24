import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Country } from '../models/country.model';
import { CountryActions } from '../actions/countries.actions';

export interface State {
  data: Country[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const countriesReducer = createReducer(
  initialState,

  // Load countries
  on(CountryActions.loadCountries, (state: State) => ({
    ...state,
    data: [],
    error: null,
  })),
  on(CountryActions.loadCountriesStart, (state: State) => ({
    ...state,
    loading: true,
  })),
  on(CountryActions.loadCountriesSuccess, (state: State, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(CountryActions.loadCountriesError, (state: State, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return countriesReducer(state, action);
}

export const getState = createFeatureSelector<State>('countries');
export const selectCountries = createSelector(getState, (state) => state);
export const selectCountriesData = createSelector(getState, (state) => state.data);
export const countriesLoading = createSelector(getState, (state) => state.loading);
