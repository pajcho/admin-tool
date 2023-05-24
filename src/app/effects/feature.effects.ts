import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { FeatureService } from '../services/feature.service';
import { GlobalActions } from '../actions/global.actions';
import { FeatureActions } from '../actions/features.actions';

@Injectable()
export class FeatureEffects {
  loadFeatures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeatureActions.loadFeatures),
      tap(() => this.store.dispatch(FeatureActions.loadFeaturesStart())),
      switchMap(() =>
        this.featureService.list().pipe(
          map((features) => {
            return FeatureActions.loadFeaturesSuccess({ data: features });
          }),
          catchError(() => {
            return of(FeatureActions.loadFeaturesError({ error: 'Features could not be loaded. Please try again.' }));
          })
        )
      )
    )
  );

  toggleFeatureStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeatureActions.toggleFeatureStatus),
      tap(() => this.store.dispatch(FeatureActions.toggleFeatureStatusStart())),
      switchMap(({ data }) =>
        this.featureService.toggleStatus(data).pipe(
          map((feature) => {
            const status = feature.enabled ? 'enabled' : 'disabled';
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `Feature successfully ${status}.` }));
            return FeatureActions.toggleFeatureStatusSuccess({ data: feature });
          }),
          catchError(() => {
            return of(
              FeatureActions.toggleFeatureStatusError({
                error: 'Feature status could not be changed. Please try again.',
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
        ofType(FeatureActions.loadFeaturesError, FeatureActions.toggleFeatureStatusError),
        tap(({ error }) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: error }));
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private featureService: FeatureService) {}
}
