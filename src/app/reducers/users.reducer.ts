import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { User, UserAdapter } from '../models/user.model';
import { DashboardStat } from './common.interfaces';
import { PaginationData } from '../models/pagination.model';
import { UserActions } from '../actions/users.actions';

export interface State {
  data: User[];
  pagination?: PaginationData;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const usersReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state: State, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
  })),
  on(UserActions.loadUsersSuccess, (state: State, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
  })),
  on(
    UserActions.loadUsersError,
    UserActions.saveUserDetailsError,
    UserActions.changeUserPasswordError,
    (state: State, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  ),
  on(UserActions.saveUserDetails, UserActions.changeUserPassword, (state: State) => ({
    ...state,
    error: null,
  })),
  on(
    UserActions.loadUsersStart,
    UserActions.saveUserDetailsStart,
    UserActions.changeUserPasswordStart,
    (state: State) => ({
      ...state,
      loading: true,
    })
  ),
  on(UserActions.saveUserDetailsSuccess, UserActions.changeUserPasswordSuccess, (state: State) => ({
    ...state,
    loading: false,
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return usersReducer(state, action);
}

export const getState = createFeatureSelector<State>('users');
export const selectUsers = createSelector(getState, (state) => {
  return {
    ...state,
    data: state.data.map((item) => new UserAdapter().adapt(item)),
  };
});
export const selectUsersData = createSelector(selectUsers, (state) => state.data);
export const selectUsersPagination = createSelector(getState, (state) => state.pagination || {});
export const usersLoading = createSelector(getState, (state) => state.loading);
export const selectUsersStats = createSelector(
  getState,
  (state): DashboardStat => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
  })
);
