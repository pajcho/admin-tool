import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { CompanyUser, CompanyUserAdapter } from '../models/company-user.model';
import { addOrUpdate } from './helpers';
import { DashboardStat } from './common.interfaces';
import { PaginationData } from '../models/pagination.model';
import { CompanyUserActions } from '../actions/company-users.actions';

export interface State {
  data: CompanyUser[];
  selectedUser: CompanyUser;
  pagination?: PaginationData;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  selectedUser: null,
  loading: false,
  error: null,
};

const companyUsersReducer = createReducer(
  initialState,

  // Load company users
  on(CompanyUserActions.loadCompanyUsers, (state: State, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
  })),
  on(CompanyUserActions.loadCompanyUsersSuccess, (state: State, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
  })),

  // Load Company User
  on(CompanyUserActions.loadCompanyUserSuccess, (state: State, { data }) => ({
    ...state,
    data: addOrUpdate(state, data),
    loading: false,
  })),

  // Load And Select Company User
  on(CompanyUserActions.loadAndSelectCompanyUserSuccess, (state: State, { data }) => ({
    ...state,
    selectedUser: data,
    loading: false,
  })),

  // Save details
  on(CompanyUserActions.saveCompanyUserDetailsSuccess, (state: State, { data }) => ({
    ...state,
    // If the user we are updating is a currently selected user we have to update it as well
    selectedUser: addOrUpdate({ data: [state.selectedUser] }, data)[0],
    loading: false,
  })),

  // Base actions handling
  on(CompanyUserActions.loadAndSelectCompanyUser, (state: State) => ({
    ...state,
    selectedUser: null,
    error: null,
  })),
  on(CompanyUserActions.loadCompanyUser, CompanyUserActions.saveCompanyUserDetails, (state: State) => ({
    ...state,
    error: null,
  })),

  // Start actions handling
  on(
    CompanyUserActions.loadCompanyUsersStart,
    CompanyUserActions.loadCompanyUserStart,
    CompanyUserActions.loadAndSelectCompanyUserStart,
    CompanyUserActions.saveCompanyUserDetailsStart,
    (state: State) => ({
      ...state,
      loading: true,
    })
  ),

  // Error actions handling
  on(
    CompanyUserActions.loadCompanyUsersError,
    CompanyUserActions.loadCompanyUserError,
    CompanyUserActions.loadAndSelectCompanyUserError,
    CompanyUserActions.saveCompanyUserDetailsError,
    (state: State, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  )
);

export function reducer(state: State | undefined, action: Action): State {
  return companyUsersReducer(state, action);
}

export const getState = createFeatureSelector<State>('companyUsers');
export const selectCompanyUsers = createSelector(getState, (state: State) => {
  return {
    ...state,
    selectedUser: new CompanyUserAdapter().adapt(state.selectedUser),
    data: state.data.map((item) => new CompanyUserAdapter().adapt(item)),
  };
});
export const selectCompanyUsersData = createSelector(selectCompanyUsers, (state) => state.data);
export const companyUsersLoading = createSelector(getState, (state: State) => state.loading);

export const selectCompanyUserById = (id: CompanyUser['id']) => {
  return createSelector(selectCompanyUsers, (state) => {
    return state.data.find((item) => item.id === id);
  });
};
export const selectCompanyUsersStats = createSelector(
  getState,
  (state: State): DashboardStat => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
  })
);
export const getSelectedCompanyUser = createSelector(selectCompanyUsers, (state) => state.selectedUser);
