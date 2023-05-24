import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { VendorsPaymentProviderService } from '../services/vendors-payment-provider.service';
import { VendorsPaymentProvider } from '../models/vendors-payment-provider.model';
import { GlobalActions } from '../actions/global.actions';
import { PaginationData } from '../models/pagination.model';
import { VendorsPaymentProviderActions } from '../actions/vendors-payment-providers.actions';

@Injectable()
export class VendorsPaymentProviderEffects {
  loadVendorsPaymentProviders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VendorsPaymentProviderActions.loadVendorsPaymentProviders),
      tap(() => this.store.dispatch(VendorsPaymentProviderActions.loadVendorsPaymentProvidersStart())),
      switchMap(({ params }) =>
        this.vendorPaymentProviderService.list(params).pipe(
          map((response: { data: VendorsPaymentProvider[]; pagination: PaginationData }) => {
            return VendorsPaymentProviderActions.loadVendorsPaymentProvidersSuccess({
              data: response.data,
              pagination: response.pagination,
            });
          }),
          catchError(() => {
            return of(
              VendorsPaymentProviderActions.loadVendorsPaymentProvidersError({
                error: 'Vendors payment providers could not be loaded. Please try again.',
              })
            );
          })
        )
      )
    )
  );

  saveVendorsPaymentProviderDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VendorsPaymentProviderActions.saveVendorsPaymentProviderDetails),
      tap(() => this.store.dispatch(VendorsPaymentProviderActions.saveVendorsPaymentProviderDetailsStart())),
      switchMap(({ data }) =>
        this.vendorPaymentProviderService.saveDetails(data).pipe(
          map((item) => {
            this.store.dispatch(
              GlobalActions.showSuccessMessage({ message: `Vendors payment provider details saved.` })
            );
            return VendorsPaymentProviderActions.saveVendorsPaymentProviderDetailsSuccess({ data: item });
          }),
          catchError(() => {
            return of(
              VendorsPaymentProviderActions.saveVendorsPaymentProviderDetailsError({
                error: 'Vendors payment provider details could not be saved. Please try again.',
              })
            );
          })
        )
      )
    )
  );

  toggleVendorsPaymentProviderStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatus),
      tap(() => this.store.dispatch(VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatusStart())),
      switchMap(({ data }) =>
        this.vendorPaymentProviderService.toggleStatus(data).pipe(
          map((product) => {
            this.store.dispatch(
              GlobalActions.showSuccessMessage({ message: `Vendors payment provider status successfully changed.` })
            );
            return VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatusSuccess({ data: product });
          }),
          catchError(() => {
            return of(
              VendorsPaymentProviderActions.toggleVendorsPaymentProviderStatusError({
                error: 'Vendors payment provider status could not be changed. Please try again.',
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
          VendorsPaymentProviderActions.loadVendorsPaymentProvidersError,
          VendorsPaymentProviderActions.saveVendorsPaymentProviderDetailsError
        ),
        tap((action) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: action.error }));
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private vendorPaymentProviderService: VendorsPaymentProviderService
  ) {}
}
