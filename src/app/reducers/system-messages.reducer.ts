import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { SystemMessage, SystemMessageAdapter } from '../models/system-message.model';
import { addOrUpdate } from './helpers';
import { DashboardStat } from './common.interfaces';
import { PaginationData } from '../models/pagination.model';
import { SystemMessageActions } from '../actions/system-messages.actions';

export interface State {
  data: SystemMessage[];
  pagination?: PaginationData;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const systemMessagesReducer = createReducer(
  initialState,

  // Load systemMessages
  on(SystemMessageActions.loadSystemMessages, (state: State, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
  })),
  on(SystemMessageActions.loadSystemMessagesSuccess, (state: State, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
  })),

  // Load SystemMessage
  on(SystemMessageActions.loadSystemMessageSuccess, (state: State, { data }) => ({
    ...state,
    data: addOrUpdate(state, data),
    loading: false,
  })),

  // Save and Delete
  on(
    SystemMessageActions.saveSystemMessageSuccess,
    SystemMessageActions.deleteSystemMessageSuccess,
    (state: State) => ({
      ...state,
      loading: false,
    })
  ),

  // Base actions handling
  on(
    SystemMessageActions.loadSystemMessage,
    SystemMessageActions.saveSystemMessage,
    SystemMessageActions.deleteSystemMessage,
    (state: State) => ({
      ...state,
      error: null,
    })
  ),

  // Start actions handling
  on(
    SystemMessageActions.loadSystemMessagesStart,
    SystemMessageActions.loadSystemMessageStart,
    SystemMessageActions.saveSystemMessageStart,
    SystemMessageActions.deleteSystemMessageStart,
    (state: State) => ({
      ...state,
      loading: true,
    })
  ),

  // Error actions handling
  on(
    SystemMessageActions.loadSystemMessagesError,
    SystemMessageActions.loadSystemMessageError,
    SystemMessageActions.saveSystemMessageError,
    SystemMessageActions.deleteSystemMessageError,
    (state: State, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  )
);

export function reducer(state: State | undefined, action: Action): State {
  return systemMessagesReducer(state, action);
}

export const getState = createFeatureSelector<State>('systemMessages');
export const selectSystemMessages = createSelector(getState, (state: State) => {
  return {
    ...state,
    data: state.data.map((item) => new SystemMessageAdapter().adapt(item)),
  };
});
export const selectSystemMessagesData = createSelector(selectSystemMessages, ({ data }) => data);
export const systemMessagesLoading = createSelector(getState, (state) => state.loading);

export const selectSystemMessageById = (id: SystemMessage['id']) => {
  return createSelector(getState, (state) => {
    return new SystemMessageAdapter().adapt(state.data.find((item) => item.id === id));
  });
};
export const selectSystemMessagesStats = createSelector(
  getState,
  (state): DashboardStat => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
  })
);
