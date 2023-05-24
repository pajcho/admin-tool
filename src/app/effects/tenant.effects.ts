import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';

import { TenantActions } from '../actions/tenant.actions';
import { TenantService } from '../services/tenant.service';

@Injectable()
export class TenantEffects {
  loadPrimaryTenants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TenantActions.loadPrimaryTenants),
      tap(() => this.store.dispatch(TenantActions.loadPrimaryTenantsStart())),
      switchMap(() =>
        this.tenantService.getPrimaryTenants().pipe(
          map((tenants) => {
            return TenantActions.loadPrimaryTenantsSuccess({ data: tenants });
          }),
          catchError(() => {
            return of(
              TenantActions.loadPrimaryTenantsError({
                error: 'Tenants list could not be loaded. Refresh the page to try again.',
              })
            );
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private tenantService: TenantService) {}
}
