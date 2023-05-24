import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../reducers';
import { CompanyActions } from '../actions/companies.actions';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company.model';
import { GlobalActions } from '../actions/global.actions';
import { PaginationData } from '../models/pagination.model';

@Injectable()
export class CompanyEffects {
  loadCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.loadCompanies),
      tap(() => this.store.dispatch(CompanyActions.loadCompaniesStart())),
      switchMap((action) =>
        this.companyService.list(action.params).pipe(
          map((response: { data: Company[]; pagination: PaginationData }) => {
            return CompanyActions.loadCompaniesSuccess({ data: response.data, pagination: response.pagination });
          }),
          catchError(() => {
            return of(CompanyActions.loadCompaniesError({ error: 'Companies could not be loaded. Please try again.' }));
          })
        )
      )
    )
  );

  loadCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.loadCompany),
      tap(() => this.store.dispatch(CompanyActions.loadCompanyStart())),
      switchMap((action) =>
        this.companyService.getDetails(action.id).pipe(
          map((response: Company) => {
            return CompanyActions.loadCompanySuccess({ data: response });
          }),
          catchError(() => {
            return of(
              CompanyActions.loadCompanyError({ error: 'Company details could not be loaded. Please try again.' })
            );
          })
        )
      )
    )
  );

  saveCompanyDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.saveCompanyDetails),
      tap(() => this.store.dispatch(CompanyActions.saveCompanyDetailsStart())),
      switchMap((action) =>
        this.companyService.saveDetails(action.data).pipe(
          map((response) => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `Company details saved.` }));
            return CompanyActions.saveCompanyDetailsSuccess({ data: response });
          }),
          catchError(() => {
            return of(
              CompanyActions.saveCompanyDetailsError({ error: 'Company details could not be saved. Please try again.' })
            );
          })
        )
      )
    )
  );

  deleteCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.deleteCompany),
      tap(() => this.store.dispatch(CompanyActions.deleteCompanyStart())),
      switchMap((action) =>
        this.companyService.delete(action.data).pipe(
          map(() => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `Company successfully deleted.` }));
            return CompanyActions.deleteCompanySuccess({ data: action.data });
          }),
          catchError(() => {
            return of(CompanyActions.deleteCompanyError({ error: 'Company could not be deleted. Please try again.' }));
          })
        )
      )
    )
  );

  toggleCompanySubscriptionStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.toggleCompanySubscriptionStatus),
      tap(() => this.store.dispatch(CompanyActions.toggleCompanySubscriptionStatusStart())),
      switchMap(({ data }) =>
        this.companyService.toggleSubscriptionStatus(data).pipe(
          map((company) => {
            this.store.dispatch(GlobalActions.showSuccessMessage({ message: `Company status successfully changed.` }));
            return CompanyActions.toggleCompanySubscriptionStatusSuccess({ data: company });
          }),
          catchError(() => {
            return of(
              CompanyActions.toggleCompanySubscriptionStatusError({
                error: 'Company status could not be changed. Please try again.',
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
          CompanyActions.loadCompaniesError,
          CompanyActions.loadCompanyError,
          CompanyActions.saveCompanyDetailsError,
          CompanyActions.toggleCompanySubscriptionStatusError,
          CompanyActions.deleteCompanyError
        ),
        tap((action) => {
          this.store.dispatch(GlobalActions.showErrorMessage({ message: action.error }));
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private companyService: CompanyService) {}
}
