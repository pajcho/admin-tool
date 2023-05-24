import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { BillingRequestActions } from '../actions/billing-requests.actions';
import { BillingRequestService } from '../services/billing-request.service';
import { BillingRequest, BillingRequestStatus } from '../models/billing-request.model';
import { GlobalActions } from '../actions/global.actions';
import { PaginationData } from '../models/pagination.model';

@Injectable()
export class BillingRequestEffects {
  loadBillingRequests$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BillingRequestActions.loadRequests),
      tap(() => this.store.dispatch(BillingRequestActions.loadRequestsStart())),
      switchMap(({ params }) =>
        this.billingRequestService.list(params).pipe(
          map((response: { data: BillingRequest[]; pagination: PaginationData }) => {
            return BillingRequestActions.loadRequestsSuccess({ data: response.data, pagination: response.pagination });
          }),
          catchError(() => {
            return of(
              BillingRequestActions.loadRequestsError({
                error: 'Billing requests could not be loaded. Please try again.',
              })
            );
          })
        )
      )
    )
  );

  changeBillingRequestStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BillingRequestActions.changeStatus),
      tap(() => this.store.dispatch(BillingRequestActions.changeStatusStart())),
      switchMap(({ data }) =>
        this.billingRequestService.update(data).pipe(
          map(() => {
            const statusMap = {
              [BillingRequestStatus.ENABLED]: 'approved',
              [BillingRequestStatus.BLOCKED]: 'blocked',
              [BillingRequestStatus.DENIED]: 'denied',
            };

            this.store.dispatch(
              GlobalActions.showSuccessMessage({
                message: `Billing request ${statusMap[data.billingProfileRequestStatus]}`,
              })
            );
            return BillingRequestActions.changeStatusSuccess({ data });
          }),
          catchError(() => {
            return of(
              BillingRequestActions.changeStatusError({ error: 'Billing request update failed. Please try again.' })
            );
          })
        )
      )
    )
  );

  showToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BillingRequestActions.loadRequestsError, BillingRequestActions.changeStatusError),
        tap((action) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: action.error }));
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private billingRequestService: BillingRequestService
  ) {}
}
