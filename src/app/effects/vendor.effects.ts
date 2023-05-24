import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { VendorService } from '../services/vendor.service';
import { Vendor } from '../models/vendor.model';
import { GlobalActions } from '../actions/global.actions';
import { PaginationData } from '../models/pagination.model';
import { VendorActions } from '../actions/vendors.actions';

@Injectable()
export class VendorEffects {
  loadVendors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VendorActions.loadVendors),
      tap(() => this.store.dispatch(VendorActions.loadVendorsStart())),
      switchMap(({ params }) =>
        this.vendorService.list(params).pipe(
          map((response: { data: Vendor[]; pagination: PaginationData }) => {
            return VendorActions.loadVendorsSuccess({ data: response.data, pagination: response.pagination });
          }),
          catchError(() => {
            return of(VendorActions.loadVendorsError({ error: 'Vendors could not be loaded. Please try again.' }));
          })
        )
      )
    )
  );

  saveVendorDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VendorActions.saveVendorDetails),
      tap(() => this.store.dispatch(VendorActions.saveVendorDetailsStart())),
      switchMap(({ data }) =>
        this.vendorService.saveDetails(data).pipe(
          map((vendor) => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `Vendor details saved.` }));
            return VendorActions.saveVendorDetailsSuccess({ data: vendor });
          }),
          catchError(() => {
            return of(
              VendorActions.saveVendorDetailsError({ error: 'Vendor details could not be saved. Please try again.' })
            );
          })
        )
      )
    )
  );

  deleteVendor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VendorActions.deleteVendor),
      tap(() => this.store.dispatch(VendorActions.deleteVendorStart())),
      switchMap(({ data }) =>
        this.vendorService.delete(data).pipe(
          map(() => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `Vendor successfully deleted.` }));
            return VendorActions.deleteVendorSuccess({ data });
          }),
          catchError(() => {
            return of(VendorActions.deleteVendorError({ error: 'Vendor could not be deleted. Please try again.' }));
          })
        )
      )
    )
  );

  toggleVendorStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VendorActions.toggleVendorStatus),
      tap(() => this.store.dispatch(VendorActions.toggleVendorStatusStart())),
      switchMap(({ data }) =>
        this.vendorService.toggleStatus(data).pipe(
          map((product) => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `Vendor status successfully changed.` }));
            return VendorActions.toggleVendorStatusSuccess({ data: product });
          }),
          catchError(() => {
            return of(
              VendorActions.toggleVendorStatusError({ error: 'Vendor status could not be changed. Please try again.' })
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
          VendorActions.loadVendorsError,
          VendorActions.saveVendorDetailsError,
          VendorActions.deleteVendorError,
          VendorActions.toggleVendorStatusError
        ),
        tap(({ error }) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: error }));
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private vendorService: VendorService) {}
}
