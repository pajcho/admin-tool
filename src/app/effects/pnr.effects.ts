import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { GlobalActions } from '../actions/global.actions';
import { PNRService } from '../services/pnr.service';
import { PnrActions } from '../actions/pnr.actions';

@Injectable()
export class PNREffects {
  validateFlightPNR$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PnrActions.validateFlightPnr),
      tap(() => this.store.dispatch(PnrActions.validateFlightPnrStart())),
      switchMap(({ data }) =>
        this.pnrService.validateFlightPNR(data).pipe(
          map((response) => {
            return PnrActions.validateFlightPnrSuccess({ data: response });
          }),
          catchError(() => {
            return of(
              PnrActions.validateFlightPnrError({ error: 'Flight PNR could not be validated. Please try again.' })
            );
          })
        )
      )
    )
  );

  confirmFlightPNR$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PnrActions.confirmFlightPnr),
      tap(() => this.store.dispatch(PnrActions.confirmFlightPnrStart())),
      switchMap(({ data }) =>
        this.pnrService.confirmFlightPNR(data).pipe(
          map((response) => {
            return PnrActions.confirmFlightPnrSuccess({ data: response });
          }),
          catchError(() => {
            return of(
              PnrActions.confirmFlightPnrError({ error: 'Flight PNR could not be confirmed. Please try again.' })
            );
          })
        )
      )
    )
  );

  showToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PnrActions.validateFlightPnrError, PnrActions.confirmFlightPnrError),
        tap(({ error }) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: error }));
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private pnrService: PNRService) {}
}
