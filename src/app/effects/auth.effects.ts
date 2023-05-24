import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { noop, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppState } from '../reducers';
import { AuthActions } from '../actions/auth.actions';
import { AuthService } from '../auth/auth.service';
import { GlobalActions } from '../actions/global.actions';
import { UserActions } from '../actions/users.actions';
import { selectQueryParam } from '../reducers/router.reducer';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      tap(() => this.store.dispatch(AuthActions.loginStart())),
      switchMap((data) =>
        this.authService.login(data).pipe(
          map((user) => {
            return AuthActions.loginSuccess({ data: user });
          }),
          catchError(() => {
            return of(AuthActions.loginError({ error: 'Login failed. Please try again.' }));
          })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => this.store.dispatch(AuthActions.logoutStart())),
      switchMap(({ message }) =>
        this.authService.logout().pipe(
          map(() => {
            return AuthActions.logoutSuccess(message);
          }),
          catchError(() => {
            return of(AuthActions.logoutError({ error: 'Logout failed. Please try again.' }));
          })
        )
      )
    )
  );

  forgotPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.forgotPassword),
      tap(() => this.store.dispatch(AuthActions.forgotPasswordStart())),
      switchMap(({ email }) =>
        this.authService.forgotPassword(email).pipe(
          map(() => {
            return AuthActions.forgotPasswordSuccess();
          }),
          catchError(() => {
            return of(AuthActions.forgotPasswordError({ error: 'Request failed. Please try again.' }));
          })
        )
      )
    )
  );

  changePassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.changePassword),
      tap(() => this.store.dispatch(AuthActions.changePasswordStart())),
      switchMap(({ id, password }) =>
        this.authService.activateNewPassword(id, password).pipe(
          map(() => {
            return AuthActions.changePasswordSuccess();
          }),
          catchError(() => {
            return of(AuthActions.changePasswordError({ error: 'Request failed. Please try again.' }));
          })
        )
      )
    )
  );

  setPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.setPassword),
      tap(() => this.store.dispatch(AuthActions.setPasswordStart())),
      switchMap(({ id, password }) =>
        this.authService.setNewPassword(id, password).pipe(
          map(() => {
            return AuthActions.setPasswordSuccess();
          }),
          catchError(() => {
            return of(AuthActions.setPasswordError({ error: 'Request failed. Please try again.' }));
          })
        )
      )
    )
  );

  syncLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.saveUserDetailsSuccess),
        tap(({ data }) => {
          const loggedInUser = this.authService.getUser();

          // If we have updated currently logged in user
          if (loggedInUser.id === data.id) {
            // We will persist the changes in the local storage
            this.authService.setUser(data, loggedInUser.token);
          }
        })
      ),
    { dispatch: false }
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        withLatestFrom(this.store.select(selectQueryParam('redirectTo'))),
        tap(([, redirectTo]) => {
          // Show success message and redirect to application
          this.store.dispatch(GlobalActions.showSuccessMessage({ message: 'Logged in successfully' }));
          this.router.navigateByUrl(redirectTo || '/').then(noop);
        })
      ),
    { dispatch: false }
  );

  logoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logoutSuccess),
        tap(({ message }) => {
          // Show success message and redirect to the login page
          this.store.dispatch(GlobalActions.showSuccessMessage({ message: message || 'Logged out successfully' }));
          return this.router.navigate(['/auth/login']);
        })
      ),
    { dispatch: false }
  );

  showToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          AuthActions.loginError,
          AuthActions.logoutError,
          AuthActions.forgotPasswordError,
          AuthActions.changePasswordError,
          AuthActions.setPasswordError
        ),
        tap(({ error }) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: error }));
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {}
}
