import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { BookingActions } from '../actions/bookings.actions';
import { BookingService } from '../services/booking.service';
import { Booking } from '../models/booking.model';
import { GlobalActions } from '../actions/global.actions';
import { BookingListItem } from '../models/booking-list-item.model';
import { PaginationData } from '../models/pagination.model';

@Injectable()
export class BookingEffects {
  loadBookings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.loadBookings),
      tap(() => this.store.dispatch(BookingActions.loadBookingsStart())),
      switchMap((action) =>
        this.bookingService.list(action.params).pipe(
          map((response: { data: BookingListItem[]; pagination: PaginationData }) => {
            return BookingActions.loadBookingsSuccess({ data: response.data, pagination: response.pagination });
          }),
          catchError(() => {
            return of(BookingActions.loadBookingsError({ error: 'Bookings could not be loaded. Please try again.' }));
          })
        )
      )
    )
  );

  loadBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.loadBooking),
      tap(() => this.store.dispatch(BookingActions.loadBookingStart())),
      switchMap((action) =>
        this.bookingService.getDetails(action.id).pipe(
          map((response: Booking) => {
            return BookingActions.loadBookingSuccess({ data: response });
          }),
          catchError(() => {
            return of(
              BookingActions.loadBookingError({ error: 'Booking details could not be loaded. Please try again.' })
            );
          })
        )
      )
    )
  );

  loadAndSelectBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.loadAndSelectBooking),
      tap(() => this.store.dispatch(BookingActions.loadAndSelectBookingStart())),
      switchMap((action) =>
        this.bookingService.getDetails(action.id).pipe(
          map((response: Booking) => {
            return BookingActions.loadAndSelectBookingSuccess({ data: response });
          }),
          catchError(() => {
            return of(
              BookingActions.loadAndSelectBookingError({
                error: 'Booking details could not be loaded. Please try again.',
              })
            );
          })
        )
      )
    )
  );

  saveBookingDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.saveBookingDetails),
      tap(() => this.store.dispatch(BookingActions.saveBookingDetailsStart())),
      switchMap((action) =>
        this.bookingService.update(action.data).pipe(
          map((response) => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `Booking details saved.` }));
            return BookingActions.saveBookingDetailsSuccess({ data: response });
          }),
          catchError(() => {
            return of(
              BookingActions.saveBookingDetailsError({ error: 'Booking details could not be saved. Please try again.' })
            );
          })
        )
      )
    )
  );

  getReferenceTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.loadReferenceTypes),
      tap(() => this.store.dispatch(BookingActions.loadReferenceTypesStart())),
      switchMap(() =>
        this.bookingService.getReferenceTypes().pipe(
          map((response) => {
            return BookingActions.loadReferenceTypesSuccess({ data: response });
          }),
          catchError(() => {
            return of(
              BookingActions.loadReferenceTypesError({
                error: 'Reference types could not be loaded. Please try again.',
              })
            );
          })
        )
      )
    )
  );

  showToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          BookingActions.loadBookingsError,
          BookingActions.loadBookingError,
          BookingActions.loadAndSelectBookingError,
          BookingActions.saveBookingDetailsError,
          BookingActions.loadReferenceTypesError
        ),
        tap((action) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: action.error }));
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private bookingService: BookingService) {}
}
