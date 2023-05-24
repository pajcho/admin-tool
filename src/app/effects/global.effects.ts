import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalActions } from '../actions/global.actions';

@Injectable()
export class GlobalEffects {
  showSuccessToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GlobalActions.showSuccessMessage),
        tap((action) => {
          // If no action button label is sent we default to null, which means there will be no button
          const buttonLabel = action.action === undefined ? null : action.action;

          // Default is 4000ms
          const duration = action.duration === undefined ? 4000 : action.duration;

          return this.snackBar.open(action.message, buttonLabel, {
            duration,
            panelClass: ['snackbar-success'],
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
        })
      ),
    { dispatch: false }
  );

  showErrorToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GlobalActions.showErrorMessage),
        tap((action) => {
          // If no action button label is sent we default to OK, but user can still send null to remove action button
          const buttonLabel = action.action === undefined ? 'OK' : action.action;

          // Default is 10000ms
          const duration = action.duration === undefined ? 10000 : action.duration;

          return this.snackBar.open(action.message, buttonLabel, {
            duration,
            panelClass: ['snackbar-error'],
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private snackBar: MatSnackBar) {}
}
