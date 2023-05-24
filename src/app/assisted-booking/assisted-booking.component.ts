import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { BehaviorSubject, combineLatest, forkJoin, Observable, of } from 'rxjs';
import { distinctUntilChanged, filter, map, mergeMap, take, takeWhile, tap, withLatestFrom } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { companiesLoading, selectCompanyById } from '../reducers/companies.reducer';
import { companyUsersLoading, getSelectedCompanyUser } from '../reducers/company-users.reducer';
import { AppState } from '../reducers';
import { CompanyActions } from '../actions/companies.actions';
import { CompanyUserActions } from '../actions/company-users.actions';
import { BaseComponent } from '../base.component';
import { CompanyModel } from '../models/company.model';
import { selectPNRData } from '../reducers/pnr.reducer';
import { FlightPNRValidationModel } from '../models/pnr.model';
import { PnrActions } from '../actions/pnr.actions';

@Component({
  selector: 'app-assisted-booking',
  templateUrl: './assisted-booking.component.html',
})
export class AssistedBookingComponent extends BaseComponent implements OnInit {
  activeStep$ = new BehaviorSubject<'validate' | 'details' | 'updates'>('validate');

  company$: Observable<CompanyModel>;
  companyUser$ = this.store.select(getSelectedCompanyUser).pipe(filter((user) => !!user?.id));

  // Show initial loader until both company and company user details are completely loaded
  firstTimeLoading$ = combineLatest([this.store.select(companiesLoading), this.store.select(companyUsersLoading)]).pipe(
    takeWhile(([companyLoading, companyUserLoading]) => {
      return companyLoading || companyUserLoading;
    }, true),
    map(([companyLoading, companyUserLoading]) => companyLoading || companyUserLoading)
  );

  validatedPNR$: Observable<FlightPNRValidationModel> = this.store.select(selectPNRData).pipe(
    distinctUntilChanged((prev, current) => JSON.stringify(prev) === JSON.stringify(current)),
    tap((pnr) => {
      // If PNR is validated for the first time, and we are still on the validation
      // page we want to automatically redirect user to the details page
      if (pnr.valid && this.activeStep$.getValue() === 'validate') this.goToDetails();
    })
  );

  constructor(
    protected formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    super();
  }

  ngOnInit() {
    // Load company data if not already in store
    this.subscriptions.add(
      this.companyUser$
        .pipe(
          filter((user) => !!user?.id),
          mergeMap((user) => forkJoin([of(user), this.store.select(selectCompanyById(user.companyId)).pipe(take(1))]))
        )
        .subscribe(([{ companyId }, company]) => {
          if (!company?.id || company?.id !== companyId) {
            // Load company details if we don't have one in store already
            this.store.dispatch(CompanyActions.loadCompany({ id: companyId }));
          }

          this.company$ = this.store.select(selectCompanyById(companyId)).pipe(filter((company) => !!company?.id));
        })
    );

    // Load company user data if not already in store
    this.subscriptions.add(
      this.route.params
        .pipe(withLatestFrom(this.store.select(getSelectedCompanyUser)))
        .subscribe(([{ id }, traveller]) => {
          if (!traveller.id || traveller.id !== id) {
            this.store.dispatch(CompanyUserActions.loadAndSelectCompanyUser({ id }));
          }
        })
    );
  }

  goToValidate() {
    this.activeStep$.next('validate');
  }

  goToDetails() {
    this.activeStep$.next('details');
  }

  goToUpdates() {
    this.activeStep$.next('updates');
  }

  ngOnDestroy() {
    super.ngOnDestroy();

    this.store.dispatch(PnrActions.resetValidatedPnr());
  }
}
