import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { CartActions } from '../actions/carts.actions';
import { CartService } from '../services/cart.service';
import { GlobalActions } from '../actions/global.actions';

@Injectable()
export class CartEffects {
  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.loadCartDetails),
      tap(() => this.store.dispatch(CartActions.loadCartDetailsStart())),
      switchMap((action) =>
        this.cartService.getDetails(action.id).pipe(
          map((response) => {
            return CartActions.loadCartDetailsSuccess({ data: response });
          }),
          catchError(() => {
            return of(
              CartActions.loadCartDetailsError({ error: 'Cart details could not be loaded. Please try again.' })
            );
          })
        )
      )
    )
  );

  showToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.loadCartDetailsError),
        tap((action) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: action.error }));
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private cartService: CartService) {}
}
