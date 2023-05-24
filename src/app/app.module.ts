import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { EffectsModule } from '@ngrx/effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginatorDefaultOptions } from '@angular/material/paginator';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppComponent } from './app.component';
import { AddHeaderInterceptor } from './interceptors/add-header.interceptor';
import { MockedRequestsInterceptor } from './interceptors/mocked-requests.interceptor';
import { AppState, metaReducers, reducers } from './reducers';
import { environment } from '../environments/environment';
import { ConfirmationComponent } from './dialog/confirmation/confirmation.component';
import { ConfirmationDialogEffects } from './effects/confirmation-dialog.effects';
import { CountryEffects } from './effects/country.effects';
import { DashboardModule } from './dashboard/dashboard.module';
import { GlobalEffects } from './effects/global.effects';
import { BreadcrumbsModule } from './global/breadcrumbs/breadcrumbs.module';
import { WrapperListingModule } from './global/wrapper/listing/wrapper-listing.module';
import { LayoutModule } from './global/layout/layout.module';
import { AuthEffects } from './effects/auth.effects';
import { AuthActions } from './actions/auth.actions';
import { AuthService } from './auth/auth.service';
import { DTMS_CONFIG_PROVIDER } from './config/config.setup';
import { DibPipesModule } from './utils/pipes/pipes.module';
import { ApiCache, ApiCacheWithMap } from './services/api-cache.service';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { UnauthenticatedInterceptor } from './interceptors/unauthenticated.interceptor';
import { getJwtClaims } from './utils/helpers/get-jwt-claims';
import { DialogModule } from './global/dialog/dialog.module';
import { SplitSortParamInterceptor } from './interceptors/split-sort-param.interceptor';

@NgModule({
  declarations: [AppComponent, ConfirmationComponent],
  imports: [
    LayoutModule,
    WrapperListingModule,
    BreadcrumbsModule,
    DashboardModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule,
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([AuthEffects, GlobalEffects, ConfirmationDialogEffects, CountryEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MatInputModule,
    RouterModule,
    DibPipesModule,
    DialogModule,
  ],
  providers: [
    DTMS_CONFIG_PROVIDER,
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store<AppState>, authService: AuthService) => {
        return () => {
          const user = authService.getUser();

          if (user.token) {
            const tokenExpired = Date.now() < getJwtClaims(user.token).exp;

            // If token is expired we will trigger Logout action to clear the user session and redirect to login
            store.dispatch(
              tokenExpired ? AuthActions.logout('Session expired') : AuthActions.setLoggedInUser({ data: user })
            );
          }
        };
      },
      deps: [Store, AuthService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SplitSortParamInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthenticatedInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockedRequestsInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    },

    // Material defaults
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: { showDelay: 200 } as MatTooltipDefaultOptions,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' } as MatFormFieldDefaultOptions,
    },
    {
      provide: MAT_PAGINATOR_DEFAULT_OPTIONS,
      useValue: {
        formFieldAppearance: 'legacy',
        showFirstLastButtons: true,
        pageSizeOptions: [10, 50, 100],
      } as MatPaginatorDefaultOptions,
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        autoFocus: false,
        restoreFocus: true,
        hasBackdrop: true,
        disableClose: true,
        maxWidth: 700,
        minWidth: 500,
        position: {
          top: '100px',
        },
      } as MatDialogConfig,
    },
    // API caching implementation
    { provide: ApiCache, useClass: ApiCacheWithMap },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
