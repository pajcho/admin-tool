import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from '../reducers';
import { ConfirmationDialogActions } from '../actions/confirmation-dialog.actions';
import { ConfirmationComponent } from '../dialog/confirmation/confirmation.component';

@Injectable()
export class ConfirmationDialogEffects {
  showDialog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ConfirmationDialogActions.show),
        tap((action) => {
          const dialogRef = this.dialog.open(ConfirmationComponent, {
            maxWidth: 500,
            minWidth: 300,
            data: action.data,
          });

          dialogRef.afterClosed().subscribe((confirmed) => {
            if (confirmed === true && action.ok) action.ok();
            if (confirmed === false && action.cancel) action.cancel();
          });
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private dialog: MatDialog) {}
}
