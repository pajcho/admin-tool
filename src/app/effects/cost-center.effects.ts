import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { GlobalActions } from '../actions/global.actions';
import { CostCenterService } from '../services/cost-center.service';
import { CostCenterActions } from '../actions/cost-center.actions';

@Injectable()
export class CostCenterEffects {
  loadTravellerCostCenters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CostCenterActions.loadTravellerCostCenters),
      tap(() => this.store.dispatch(CostCenterActions.loadTravellerCostCentersStart())),
      switchMap(({ ids }) =>
        this.costCenterService.loadForTravellers(ids).pipe(
          map((data) => {
            return CostCenterActions.loadTravellerCostCentersSuccess({ data });
          }),
          catchError(() => {
            return of(
              CostCenterActions.loadTravellerCostCentersError({
                error: 'Traveller cost centers could not be loaded. Please try again.',
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
        ofType(CostCenterActions.loadTravellerCostCentersError),
        tap(({ error }) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: error }));
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private costCenterService: CostCenterService
  ) {}
}
