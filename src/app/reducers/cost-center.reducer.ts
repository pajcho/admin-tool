import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

import { TravelerCostCenterResponse, TravellerCostCentersAdapter } from '../models/cost-center.model';
import { CostCenterActions } from '../actions/cost-center.actions';

export interface State {
  data: TravelerCostCenterResponse[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const travellerCostCentersReducer = createReducer(
  initialState,

  // Load features
  on(CostCenterActions.loadTravellerCostCenters, (state: State) => ({
    ...state,
    data: [],
    error: null,
  })),
  on(CostCenterActions.loadTravellerCostCentersStart, (state: State) => ({
    ...state,
    loading: true,
  })),
  on(CostCenterActions.loadTravellerCostCentersSuccess, (state: State, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(CostCenterActions.loadTravellerCostCentersError, (state: State, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return travellerCostCentersReducer(state, action);
}

export const getState = createFeatureSelector<State>('costCenter');
export const selectTravellerCostCenters = createSelector(getState, (state) => {
  return {
    ...state,
    data: state.data.map((item) => new TravellerCostCentersAdapter().adapt(item)),
  };
});
export const selectTravellerCostCentersData = createSelector(selectTravellerCostCenters, (state) => state.data);
export const travellerCostCentersLoading = createSelector(getState, (state) => state.loading);
