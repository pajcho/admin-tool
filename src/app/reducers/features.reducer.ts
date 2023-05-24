import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Feature, FeatureAdapter } from '../models/feature.model';
import { DashboardStat } from './common.interfaces';
import { FeatureActions } from '../actions/features.actions';

export interface State {
  data: Feature[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const featuresReducer = createReducer(
  initialState,

  // Load features
  on(FeatureActions.loadFeatures, (state: State) => ({
    ...state,
    data: [],
    error: null,
  })),
  on(FeatureActions.loadFeaturesSuccess, (state: State, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(FeatureActions.loadFeaturesError, FeatureActions.toggleFeatureStatusError, (state: State, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Toggle state
  on(FeatureActions.toggleFeatureStatus, (state: State) => ({
    ...state,
    error: null,
  })),
  on(FeatureActions.loadFeaturesStart, FeatureActions.toggleFeatureStatusStart, (state: State) => ({
    ...state,
    loading: true,
  })),
  on(FeatureActions.toggleFeatureStatusSuccess, (state: State, { data }) => ({
    ...state,
    data: [
      ...state.data.map((item) => {
        if (item.id === data.id) {
          item.enabled = data.enabled;
        }

        return item;
      }),
    ],
    loading: false,
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return featuresReducer(state, action);
}

export const getState = createFeatureSelector<State>('features');
export const selectFeatures = createSelector(getState, (state) => {
  return {
    ...state,
    data: state.data.map((item) => new FeatureAdapter().adapt(item)),
  };
});
export const selectFeaturesData = createSelector(selectFeatures, (state) => state.data);
export const featuresLoading = createSelector(getState, (state) => state.loading);
export const selectFeaturesStats = createSelector(
  getState,
  (state): DashboardStat => ({
    loading: state.loading,
    count: state.data.length,
  })
);
