import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap, withLatestFrom, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { GlobalActions } from '../actions/global.actions';
import { CheckoutService } from '../services/checkout.service';
import { CheckoutActions } from '../actions/checkout.actions';
import { hasBookingChannelsInStore, hasCheckoutOptionsInStore } from '../reducers/checkout.reducer';

@Injectable()
export class CheckoutEffects {
  loadCheckoutOptions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CheckoutActions.loadOptions),
      withLatestFrom(this.store.select(hasCheckoutOptionsInStore)),
      // No need to load checkout options every time if we already have it in store
      filter(([, hasOptions]) => !hasOptions),
      tap(() => this.store.dispatch(CheckoutActions.loadOptionsStart())),
      switchMap(([{ companyId }]) =>
        this.checkoutService.getCheckoutOptions(companyId).pipe(
          map((data) => {
            return CheckoutActions.loadOptionsSuccess({ data });
          }),
          catchError(() => {
            return of(
              CheckoutActions.loadOptionsError({ error: 'Checkout options could not be loaded. Please try again.' })
            );
          })
        )
      )
    )
  );

  loadBookingChannels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CheckoutActions.loadBookingChannels),
      withLatestFrom(this.store.select(hasBookingChannelsInStore)),
      // No need to load checkout options every time if we already have it in store
      filter(([, hasChannels]) => !hasChannels),
      tap(() => this.store.dispatch(CheckoutActions.loadBookingChannelsStart())),
      switchMap(() =>
        this.checkoutService.getBookingChannels().pipe(
          map((data) => {
            return CheckoutActions.loadBookingChannelsSuccess({ data });
          }),
          catchError(() => {
            return of(
              CheckoutActions.loadBookingChannelsError({
                error: 'Booking channels could not be loaded. Please try again.',
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
        ofType(CheckoutActions.loadOptionsError, CheckoutActions.loadBookingChannelsError),
        tap(({ error }) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: error }));
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private checkoutService: CheckoutService) {}
}
