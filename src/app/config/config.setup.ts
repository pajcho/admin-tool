import { APP_INITIALIZER } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, takeWhile } from 'rxjs/operators';
import { tmc, TmcActions, TmcModel } from "./tmc";
import { AppState } from '../reducers';
import { Config } from './config.model';
import { TenantService } from '../services/tenant.service';

export function fetchConfigAndFillInTheStore(service: TenantService, store: Store<AppState>) {
  return (): Promise<Config> =>
    new Promise((resolve) => {
      service
        .getConfig()
        // Only keep the subscription open until we get first valid config object
        .pipe(takeWhile((config: Config) => !!config.tmc))
        .subscribe((config: Config) => {
          store.dispatch(TmcActions.setTmc({ tmc: config.tmc }));

          resolve(config);
        });
    });
}

export function makeSureWeHaveAKeyInTheStore(store: Store<AppState>) {
  return (): Promise<TmcModel> =>
    new Promise((resolve) => {
      store
        .select(tmc)
        .pipe(
          filter((tenant: TmcModel) => !!tenant?.id),
          // Only keep the subscription open until we get first valid tenant object
          takeWhile((tenant: TmcModel) => !!tenant?.id)
        )
        .subscribe((tenant: TmcModel) => resolve(tenant));
    });
}

export const DTMS_CONFIG_PROVIDER = [
  TenantService,
  {
    provide: APP_INITIALIZER,
    useFactory: fetchConfigAndFillInTheStore,
    deps: [TenantService, Store],
    multi: true,
  },
  {
    provide: APP_INITIALIZER,
    useFactory: makeSureWeHaveAKeyInTheStore,
    deps: [Store],
    multi: true,
  },
];
