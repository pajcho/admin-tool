import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap, withLatestFrom, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { GlobalActions } from '../actions/global.actions';
import { PaymentActions } from '../actions/payment.actions';
import { PaymentService } from '../services/payment.service';
import { hasPaymentOptionsInStore } from '../reducers/payment.reducer';

@Injectable()
export class PaymentEffects {
  loadPaymentOptions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PaymentActions.loadPaymentOptions),
      withLatestFrom(this.store.select(hasPaymentOptionsInStore)),
      // No need to load payment options every time if we already have it in store
      filter(([, hasOptions]) => !hasOptions),
      tap(() => this.store.dispatch(PaymentActions.loadPaymentOptionsStart())),
      switchMap(([{ id }]) =>
        this.paymentService.getPaymentOptions(id).pipe(
          map((data) => {
            return PaymentActions.loadPaymentOptionsSuccess({ data });
          }),
          catchError(() => {
            return of(
              PaymentActions.loadPaymentOptionsError({
                error: 'Payment options could not be loaded. Please try again.',
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
        ofType(PaymentActions.loadPaymentOptionsError),
        tap(({ error }) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: error }));
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private paymentService: PaymentService) {}
}
