import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { GlobalActions } from '../actions/global.actions';
import { ConfirmationDialogActions } from '../actions/confirmation-dialog.actions';
import { tmc } from '../config/tmc';
import { PaginationData } from '../models/pagination.model';
import { UserActions } from '../actions/users.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      tap(() => this.store.dispatch(UserActions.loadUsersStart())),
      switchMap(({ params }) =>
        this.userService.list(params).pipe(
          map((response: { data: User[]; pagination: PaginationData }) => {
            return UserActions.loadUsersSuccess({ data: response.data, pagination: response.pagination });
          }),
          catchError(() => {
            return of(UserActions.loadUsersError({ error: 'Users could not be loaded. Please try again.' }));
          })
        )
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      tap(() => this.store.dispatch(UserActions.loadUserStart())),
      switchMap(({ id }) =>
        this.userService.getById(id).pipe(
          map((user) => {
            return UserActions.loadUserSuccess({ data: user });
          }),
          catchError(() => {
            return of(UserActions.loadUserError({ error: 'User could not be loaded. Please try again.' }));
          })
        )
      )
    )
  );

  saveUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.saveUserDetails),
      tap(() => this.store.dispatch(UserActions.saveUserDetailsStart())),
      switchMap(({ data }) =>
        this.userService.saveDetails(data).pipe(
          map((user) => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `User details saved.` }));
            return UserActions.saveUserDetailsSuccess({ data: user });
          }),
          catchError(() => {
            return of(
              UserActions.saveUserDetailsError({ error: 'User details could not be saved. Please try again.' })
            );
          })
        )
      )
    )
  );

  changeUserPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.changeUserPassword),
      tap(() => this.store.dispatch(UserActions.changeUserPasswordStart())),
      switchMap(({ data }) =>
        this.userService.changeUserPassword(data).pipe(
          map((user) => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `Password successfully changed.` }));
            return UserActions.changeUserPasswordSuccess({ data: user });
          }),
          catchError(() => {
            return of(
              UserActions.changeUserPasswordError({ error: 'Could not change User password. Please try again.' })
            );
          })
        )
      )
    )
  );

  getOverrideToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getOverrideToken),
      tap(() => this.store.dispatch(UserActions.getOverrideTokenStart())),
      switchMap(({ username, redirectPath }) =>
        this.userService.getOverrideToken(username).pipe(
          map(({ token }) => {
            return UserActions.getOverrideTokenSuccess({ token, username, redirectPath });
          }),
          catchError(() => {
            return of(UserActions.getOverrideTokenError({ error: 'Could not get override token. Please try again.' }));
          })
        )
      )
    )
  );

  showToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          UserActions.loadUsersError,
          UserActions.saveUserDetailsError,
          UserActions.changeUserPasswordError,
          UserActions.getOverrideTokenError
        ),
        tap((action) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: action.error }));
        })
      ),
    { dispatch: false }
  );

  agentOverride$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.getOverrideTokenSuccess),
        withLatestFrom(this.store.select(tmc)),
        tap(([{ token, username, redirectPath }, tmc]) => {
          this.store.dispatch(
            ConfirmationDialogActions.show({
              data: {
                template: `
                Are you sure you want to navigate to Travel Portal?
                <br><br>
                New browser tab will open and you will be automatically logged in as
                <strong>${username}</strong>.
                Your current session with will stay intact.
              `,
                confirm: {
                  label: `Go to Travel Portal`,
                  color: 'primary',
                },
              },
              ok: () => {
                const params: string[] = [`accessToken=${token}`];

                // Add redirect param before access token so that generated URL is easier to read
                if (redirectPath) params.unshift(`redirectTo=${redirectPath}`);

                // Open new session in new browser tab, so we can preserve current session
                window.open(`https://${tmc.platformLink}/jwt-login-redirection?${params.join('&')}`, '_blank');
              },
            })
          );
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private userService: UserService) {}
}
