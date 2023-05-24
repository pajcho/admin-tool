import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { CompanyActions } from '../actions/companies.actions';
import { Company, CompanyAdapter } from '../models/company.model';
import { addOrUpdate } from './helpers';
import { DashboardStat } from './common.interfaces';
import { PaginationData } from '../models/pagination.model';

export interface State {
  data: Company[];
  pagination?: PaginationData;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const companiesReducer = createReducer(
  initialState,

  // Load companies
  on(CompanyActions.loadCompanies, (state: State, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
  })),
  on(CompanyActions.loadCompaniesSuccess, (state: State, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
  })),

  // Load Company
  on(CompanyActions.loadCompanySuccess, (state: State, { data }) => ({
    ...state,
    data: addOrUpdate(state, data),
    loading: false,
  })),

  // Save
  on(
    CompanyActions.saveCompanyDetailsSuccess,
    CompanyActions.toggleCompanySubscriptionStatusSuccess,
    (state: State, { data }) => ({
      ...state,
      data: addOrUpdate(state, data),
      loading: false,
    })
  ),

  // Delete
  on(CompanyActions.deleteCompanySuccess, (state: State, { data }) => ({
    ...state,
    data: state.data.filter((item) => item.id !== data.id),
    loading: false,
  })),

  // Base actions handling
  on(
    CompanyActions.loadCompany,
    CompanyActions.saveCompanyDetails,
    CompanyActions.toggleCompanySubscriptionStatus,
    CompanyActions.deleteCompany,
    (state: State) => ({
      ...state,
      error: null,
    })
  ),

  // Start actions handling
  on(
    CompanyActions.loadCompaniesStart,
    CompanyActions.loadCompanyStart,
    CompanyActions.saveCompanyDetailsStart,
    CompanyActions.toggleCompanySubscriptionStatusStart,
    CompanyActions.deleteCompanyStart,
    (state: State) => ({
      ...state,
      loading: true,
    })
  ),

  // Error actions handling
  on(
    CompanyActions.loadCompaniesError,
    CompanyActions.loadCompanyError,
    CompanyActions.saveCompanyDetailsError,
    CompanyActions.toggleCompanySubscriptionStatusError,
    CompanyActions.deleteCompanyError,
    (state: State, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  )
);

export function reducer(state: State | undefined, action: Action): State {
  return companiesReducer(state, action);
}

export const getState = createFeatureSelector<State>('companies');
export const selectCompanies = createSelector(getState, (state: State) => {
  return {
    ...state,
    data: state.data.map((item) => new CompanyAdapter().adapt(item)),
  };
});
export const selectCompaniesData = createSelector(selectCompanies, (state) => state.data);
export const companiesLoading = createSelector(getState, (state) => state.loading);

export const selectCompanyById = (id: Company['id']) => {
  return createSelector(selectCompanies, (state) => {
    return state.data.find((item) => item.id === id);
  });
};
export const selectCompaniesStats = createSelector(
  getState,
  (state): DashboardStat => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
  })
);
