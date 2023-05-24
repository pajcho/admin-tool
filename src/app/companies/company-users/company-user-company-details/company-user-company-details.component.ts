import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, take, takeWhile, withLatestFrom } from 'rxjs/operators';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { AppState } from '../../../reducers';
import { BaseComponent } from '../../../base.component';
import { companyUsersLoading, getSelectedCompanyUser } from '../../../reducers/company-users.reducer';
import { CompanyUserActions } from '../../../actions/company-users.actions';
import { companiesLoading, selectCompanyById } from '../../../reducers/companies.reducer';
import { CompanyActions } from '../../../actions/companies.actions';
import { CompanyModel } from '../../../models/company.model';

@Component({
  selector: 'app-company-user-company-details',
  templateUrl: './company-user-company-details.component.html',
})
export class CompanyUserCompanyDetailsComponent extends BaseComponent implements OnInit {
  company$: Observable<CompanyModel>;
  companyUser$ = this.store.select(getSelectedCompanyUser);

  // Show initial loader until both company and company user details are completely loaded
  firstTimeLoading$ = combineLatest([this.store.select(companiesLoading), this.store.select(companyUsersLoading)]).pipe(
    takeWhile(([companyLoading, companyUserLoading]) => {
      return companyLoading || companyUserLoading;
    }, true),
    map(([companyLoading, companyUserLoading]) => companyLoading || companyUserLoading)
  );

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    super();
  }

  ngOnInit(): void {
    // Load company data if not already in store
    this.subscriptions.add(
      this.route.params
        .pipe(
          mergeMap((params) =>
            forkJoin([of(params), this.store.select(selectCompanyById(params.companyId)).pipe(take(1))])
          )
        )
        .subscribe(([{ companyId }, company]) => {
          if (!company?.id || company?.id !== companyId) {
            // Load company details if we don't have one in store already
            this.store.dispatch(CompanyActions.loadCompany({ id: companyId }));
          }

          this.company$ = this.store.select(selectCompanyById(companyId));
        })
    );

    // Load company user data if not already in store
    this.subscriptions.add(
      this.route.params
        .pipe(withLatestFrom(this.store.select(getSelectedCompanyUser)))
        .subscribe(([{ id }, traveler]) => {
          if (!traveler.id || traveler.id !== id) {
            this.store.dispatch(CompanyUserActions.loadAndSelectCompanyUser({ id }));
          }
        })
    );
  }
}
