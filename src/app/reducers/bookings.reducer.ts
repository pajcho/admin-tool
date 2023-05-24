import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { BookingActions } from '../actions/bookings.actions';
import { Booking, BookingAdapter } from '../models/booking.model';
import { DashboardStat } from './common.interfaces';
import { BookingListItem, BookingListItemAdapter } from '../models/booking-list-item.model';
import { PaginationData } from '../models/pagination.model';

export interface State {
  data: BookingListItem[];
  pagination?: PaginationData;
  loading: boolean;
  error: string | null;

  // Single booking
  selectedBooking: Booking;
  selectedBookingLoading: boolean;

  // Reference types
  referenceTypes: string[];
  referenceTypesLoading: boolean;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,

  // Single booking
  selectedBooking: null,
  selectedBookingLoading: false,

  // Reference types
  referenceTypes: [],
  referenceTypesLoading: false,
};

const bookingsReducer = createReducer(
  initialState,
  // =========== Bookings List Reducers ===========
  on(BookingActions.loadBookings, (state: State, { keepDataWhileLoading }) => ({
    ...state,
    data: keepDataWhileLoading ? state.data : [],
    pagination: keepDataWhileLoading ? state.pagination : undefined,
    error: null,
  })),
  on(BookingActions.loadBookingsSuccess, (state: State, { data, pagination }) => ({
    ...state,
    data,
    pagination,
    loading: false,
  })),
  on(BookingActions.loadBookingsStart, (state: State) => ({
    ...state,
    loading: true,
  })),
  on(BookingActions.loadBookingsError, (state: State, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  // =========== Selected Booking Reducers ===========
  on(BookingActions.loadBookingSuccess, (state: State, { data }) => ({
    ...state,
    // If the booking we are loading is a currently selected booking we have to update it as well
    selectedBooking: state.selectedBooking.cartId === data.cartId ? data : state.selectedBooking,
    selectedBookingLoading: false,
  })),
  on(BookingActions.loadAndSelectBookingSuccess, (state: State, { data }) => ({
    ...state,
    selectedBooking: data,
    selectedBookingLoading: false,
  })),
  on(BookingActions.saveBookingDetailsSuccess, (state: State, { data }) => ({
    ...state,
    // If the booking we are updating is a currently selected booking we have to update it as well
    selectedBooking: state.selectedBooking.cartId === data.cartId ? data : state.selectedBooking,
    selectedBookingLoading: false,
  })),
  on(BookingActions.loadAndSelectBooking, (state: State) => ({
    ...state,
    selectedBooking: null,
    error: null,
  })),
  on(BookingActions.loadBooking, BookingActions.saveBookingDetails, (state: State) => ({
    ...state,
    error: null,
  })),
  on(
    BookingActions.loadBookingStart,
    BookingActions.loadAndSelectBookingStart,
    BookingActions.saveBookingDetailsStart,
    (state: State) => ({
      ...state,
      selectedBookingLoading: true,
    })
  ),
  on(
    BookingActions.loadBookingError,
    BookingActions.loadAndSelectBookingError,
    BookingActions.saveBookingDetailsError,
    (state: State, { error }) => ({
      ...state,
      selectedBookingLoading: false,
      error,
    })
  ),
  // =========== Reference Types Reducers ===========
  on(BookingActions.loadReferenceTypes, (state: State) => ({
    ...state,
    referenceTypes: [],
    error: null,
  })),
  on(BookingActions.loadReferenceTypesStart, (state: State) => ({
    ...state,
    referenceTypesLoading: true,
  })),
  on(BookingActions.loadReferenceTypesSuccess, (state: State, { data }) => ({
    ...state,
    referenceTypes: data,
    referenceTypesLoading: false,
  })),
  on(BookingActions.loadReferenceTypesError, (state: State, { error }) => ({
    ...state,
    referenceTypesLoading: false,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return bookingsReducer(state, action);
}

// Booking List
export const getState = createFeatureSelector<State>('bookings');
export const selectBookings = createSelector(getState, (state: State) => {
  return {
    ...state,
    selectedBooking: new BookingAdapter().adapt(state.selectedBooking),
    data: state.data.map((item) => new BookingListItemAdapter().adapt(item)),
  };
});
export const selectBookingsData = createSelector(selectBookings, (state) => state.data);
export const bookingsLoading = createSelector(getState, (state: State) => state.loading);
export const selectBookingsStats = createSelector(
  getState,
  (state: State): DashboardStat => ({
    loading: state.loading,
    count: state.pagination?.totalElements,
  })
);

// Single Booking
export const getSelectedBooking = createSelector(selectBookings, (state) => state.selectedBooking);
export const selectedBookingLoading = createSelector(selectBookings, (state) => state.selectedBookingLoading);

// Reference Types
export const selectReferenceTypes = createSelector(getState, (state) => state.referenceTypes);
export const referenceTypesLoading = createSelector(getState, (state) => state.referenceTypesLoading);
