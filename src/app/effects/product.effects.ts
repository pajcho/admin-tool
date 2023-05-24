import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { GlobalActions } from '../actions/global.actions';
import { PaginationData } from '../models/pagination.model';
import { ProductActions } from '../actions/products.actions';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      tap(() => this.store.dispatch(ProductActions.loadProductsStart())),
      switchMap(({ params }) =>
        this.productService.list(params).pipe(
          map((response: { data: Product[]; pagination: PaginationData }) => {
            return ProductActions.loadProductsSuccess({ data: response.data, pagination: response.pagination });
          }),
          catchError(() => {
            return of(ProductActions.loadProductsError({ error: 'Products could not be loaded. Please try again.' }));
          })
        )
      )
    )
  );

  saveProductDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.saveProductDetails),
      tap(() => this.store.dispatch(ProductActions.saveProductDetailsStart())),
      switchMap(({ data }) =>
        this.productService.saveDetails(data).pipe(
          map((product) => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `Product details saved.` }));
            return ProductActions.saveProductDetailsSuccess({ data: product });
          }),
          catchError(() => {
            return of(
              ProductActions.saveProductDetailsError({ error: 'Product details could not be saved. Please try again.' })
            );
          })
        )
      )
    )
  );

  toggleProductStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.toggleProductStatus),
      tap(() => this.store.dispatch(ProductActions.toggleProductStatusStart())),
      switchMap(({ data }) =>
        this.productService.toggleStatus(data).pipe(
          map((product) => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `Product status successfully changed.` }));
            return ProductActions.toggleProductStatusSuccess({ data: product });
          }),
          catchError(() => {
            return of(
              ProductActions.toggleProductStatusError({
                error: 'Product status could not be changed. Please try again.',
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
          ProductActions.loadProductsError,
          ProductActions.saveProductDetailsError,
          ProductActions.toggleProductStatusError
        ),
        tap((action) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: action.error }));
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private productService: ProductService) {}
}
