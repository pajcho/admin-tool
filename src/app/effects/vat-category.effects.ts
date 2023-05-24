import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { VatCategoryService } from '../services/vat-category.service';
import { VatCategory } from '../models/vat-category.model';
import { GlobalActions } from '../actions/global.actions';
import { PaginatedData } from '../models/pagination.model';
import { VatCategoryActions } from '../actions/vat-categories.actions';

@Injectable()
export class VatCategoryEffects {
  loadVatCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VatCategoryActions.loadVatCategories),
      tap(() => this.store.dispatch(VatCategoryActions.loadVatCategoriesStart())),
      switchMap(({ params }) =>
        this.vatCategoryService.list(params).pipe(
          map((response: PaginatedData<VatCategory>) => {
            return VatCategoryActions.loadVatCategoriesSuccess({
              data: response.data,
              pagination: response.pagination,
            });
          }),
          catchError(() => {
            return of(
              VatCategoryActions.loadVatCategoriesError({
                error: 'Vat categories could not be loaded. Please try again.',
              })
            );
          })
        )
      )
    )
  );

  toggleVatCategoryStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VatCategoryActions.toggleVatCategoryStatus),
      tap(() => this.store.dispatch(VatCategoryActions.toggleVatCategoryStatusStart())),
      switchMap(({ data }) =>
        this.vatCategoryService.toggleStatus(data).pipe(
          map((vatCategory) => {
            this.store.dispatch(
              GlobalActions.showSuccessMessage({ message: `Vat category status successfully changed.` })
            );
            return VatCategoryActions.toggleVatCategoryStatusSuccess({ data: vatCategory });
          }),
          catchError(() => {
            return of(
              VatCategoryActions.toggleVatCategoryStatusError({
                error: 'Vat category status could not be changed. Please try again.',
              })
            );
          })
        )
      )
    )
  );

  saveVatCategoryDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VatCategoryActions.saveVatCategoryDetails),
      tap(() => this.store.dispatch(VatCategoryActions.saveVatCategoryDetailsStart())),
      switchMap(({ data }) =>
        this.vatCategoryService.saveDetails(data).pipe(
          map((vatCategory) => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `Vat category details saved.` }));
            return VatCategoryActions.saveVatCategoryDetailsSuccess({ data: vatCategory });
          }),
          catchError(() => {
            return of(
              VatCategoryActions.saveVatCategoryDetailsError({
                error: 'Vat category details could not be saved. Please try again.',
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
          VatCategoryActions.loadVatCategoriesError,
          VatCategoryActions.toggleVatCategoryStatusError,
          VatCategoryActions.saveVatCategoryDetailsError
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
    private vatCategoryService: VatCategoryService
  ) {}
}
