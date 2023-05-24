import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { LayoutActions } from '../actions/layout.actions';

export interface State {
  sidenav: {
    visible: boolean;
  };
}

const initialState: State = {
  sidenav: {
    visible: false,
  },
};

const layoutReducer = createReducer(
  initialState,

  // Sidenav visibility
  on(LayoutActions.toggleSidenav, (state: State, { visible }) => ({ sidenav: { visible } }))
);

export function reducer(state: State | undefined, action: Action): State {
  return layoutReducer(state, action);
}

export const getState = createFeatureSelector<State>('layout');
export const sidenavIsVisible = createSelector(getState, (state: State) => !!state.sidenav.visible);
