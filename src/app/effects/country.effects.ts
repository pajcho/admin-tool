import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { CountryService } from '../services/country.service';
import { GlobalActions } from '../actions/global.actions';
import { CountryActions } from '../actions/countries.actions';

@Injectable()
export class CountryEffects {
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.loadCountries),
      tap(() => this.store.dispatch(CountryActions.loadCountriesStart())),
      switchMap(() =>
        this.countryService.list().pipe(
          map((countries) => {
            return CountryActions.loadCountriesSuccess({ data: countries });
          }),
          catchError(() => {
            return of(CountryActions.loadCountriesError({ error: 'Countries could not be loaded. Please try again.' }));
          })
        )
      )
    )
  );

  showToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CountryActions.loadCountriesError),
        tap(({ error }) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: error }));
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private countryService: CountryService) {}
}
