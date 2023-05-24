import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { User, UserAdapter } from '../models/user.model';
import { UserActions } from '../actions/users.actions';
import { AuthActions } from '../actions/auth.actions';

export interface State {
  user: User;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = createReducer(
  initialState,

  on(AuthActions.login, AuthActions.logoutSuccess, (state: State) => ({
    ...state,
    user: null,
    error: null,
  })),
  on(AuthActions.loginStart, AuthActions.logoutStart, (state: State) => ({
    ...state,
    loading: true,
  })),
  on(AuthActions.loginSuccess, AuthActions.setLoggedInUser, (state: State, { data }) => ({
    ...state,
    user: data,
    loading: false,
  })),
  on(AuthActions.loginError, AuthActions.logoutError, (state: State, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(UserActions.saveUserDetailsSuccess, (state: State, { data }) => {
    // If logged in user is updated we want to update auth store as well
    if (state.user.id === data.id) {
      // But we also need to preserve the token in the state
      return { ...state, user: { ...data, token: state.user.token } };
    }

    return state;
  })
);

export function reducer(state: State | undefined, action: Action): State {
  return authReducer(state, action);
}

export const getState = createFeatureSelector<State>('auth');
export const loggedInUser = createSelector(getState, (state) => new UserAdapter().adapt(state.user));
export const authToken = createSelector(loggedInUser, (user) => user.token);
export const isLoggedIn = createSelector(authToken, (token) => !!token);
export const isLoading = createSelector(getState, (state) => state.loading);
export const hasError = createSelector(getState, (state) => !!state.error);
