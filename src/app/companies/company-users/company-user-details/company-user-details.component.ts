import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, filter, mergeMap, take, takeWhile, withLatestFrom } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import { AppState } from '../../../reducers';
import { BaseComponent } from '../../../base.component';
import { companyUsersLoading, getSelectedCompanyUser } from '../../../reducers/company-users.reducer';
import { CompanyUserActions } from '../../../actions/company-users.actions';
import { CompanyUserModel } from '../../../models/company-user.model';
import { companiesLoading, selectCompanyById } from '../../../reducers/companies.reducer';
import { CompanyActions } from '../../../actions/companies.actions';

@Component({
  selector: 'app-company-user-details',
  templateUrl: './company-user-details.component.html',
})
export class CompanyUserDetailsComponent extends BaseComponent implements OnInit {
  companyUser$ = this.store.select(getSelectedCompanyUser);

  // After company user is loaded get the related company object
  companyLoading$ = this.store.select(companiesLoading);
  company$ = this.companyUser$.pipe(
    filter((item) => !!item?.id),
    mergeMap((user) => {
      return this.store.select(selectCompanyById(user.companyId));
    })
  );

  loading$ = this.store.select(companyUsersLoading);

  // Only subscribe to initial page loading and use it for the page wrapper loader
  // Subsequent loading states will be handled differently using the main loading$ prop
  firstTimeLoading$ = this.loading$.pipe(takeWhile((loading) => loading, true));

  activeTab: 'active' | 'past' = 'active';

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    super();
  }

  ngOnInit(): void {
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

    // Load related company details every time user changes
    this.subscriptions.add(
      this.companyUser$
        .pipe(
          filter((item) => !!item?.id),
          distinctUntilChanged((prev, current) => {
            return prev?.companyId === current?.companyId;
          }),
          mergeMap((item: CompanyUserModel) =>
            forkJoin([of(item), this.store.select(selectCompanyById(item.companyId)).pipe(take(1))])
          )
        )
        .subscribe(([user, company]) => {
          if (!company?.id || company?.id !== user.companyId) {
            // Load company details if we don't have one in store already
            this.store.dispatch(CompanyActions.loadCompany({ id: user.companyId }));
          }
        })
    );
  }
}
