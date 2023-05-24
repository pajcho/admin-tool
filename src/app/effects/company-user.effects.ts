import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { CompanyUserActions } from '../actions/company-users.actions';
import { CompanyUserService } from '../services/company-user.service';
import { CompanyUser } from '../models/company-user.model';
import { GlobalActions } from '../actions/global.actions';
import { PaginationData } from '../models/pagination.model';

@Injectable()
export class CompanyUserEffects {
  loadCompanyUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyUserActions.loadCompanyUsers),
      tap(() => this.store.dispatch(CompanyUserActions.loadCompanyUsersStart())),
      switchMap((action) =>
        this.companyUserService.list(action.params).pipe(
          map((response: { data: CompanyUser[]; pagination: PaginationData }) => {
            return CompanyUserActions.loadCompanyUsersSuccess({ data: response.data, pagination: response.pagination });
          }),
          catchError(() => {
            return of(
              CompanyUserActions.loadCompanyUsersError({
                error: 'Company users could not be loaded. Please try again.',
              })
            );
          })
        )
      )
    )
  );

  loadCompanyUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyUserActions.loadCompanyUser),
      tap(() => this.store.dispatch(CompanyUserActions.loadCompanyUserStart())),
      switchMap((action) =>
        this.companyUserService.getDetails(action.id).pipe(
          map((response: CompanyUser) => {
            return CompanyUserActions.loadCompanyUserSuccess({ data: response });
          }),
          catchError(() => {
            return of(
              CompanyUserActions.loadCompanyUserError({
                error: 'Company user details could not be loaded. Please try again.',
              })
            );
          })
        )
      )
    )
  );

  loadAndSelectCompanyUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyUserActions.loadAndSelectCompanyUser),
      tap(() => this.store.dispatch(CompanyUserActions.loadAndSelectCompanyUserStart())),
      switchMap((action) =>
        this.companyUserService.getDetails(action.id).pipe(
          map((response: CompanyUser) => {
            return CompanyUserActions.loadAndSelectCompanyUserSuccess({ data: response });
          }),
          catchError(() => {
            return of(
              CompanyUserActions.loadAndSelectCompanyUserError({
                error: 'Company user details could not be loaded. Please try again.',
              })
            );
          })
        )
      )
    )
  );

  saveCompanyUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyUserActions.saveCompanyUserDetails),
      tap(() => this.store.dispatch(CompanyUserActions.saveCompanyUserDetailsStart())),
      switchMap((action) =>
        this.companyUserService.saveDetails(action.data).pipe(
          map((response) => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `Company user details saved.` }));
            return CompanyUserActions.saveCompanyUserDetailsSuccess({ data: response });
          }),
          catchError(() => {
            return of(
              CompanyUserActions.saveCompanyUserDetailsError({
                error: 'Company user details could not be saved. Please try again.',
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
        ofType(
          CompanyUserActions.loadCompanyUsersError,
          CompanyUserActions.loadCompanyUserError,
          CompanyUserActions.loadAndSelectCompanyUserError,
          CompanyUserActions.saveCompanyUserDetailsError
        ),
        tap((action) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: action.error }));
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private companyUserService: CompanyUserService
  ) {}
}
