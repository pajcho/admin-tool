import { Component, Injector } from '@angular/core';
import { noop } from 'rxjs';
import { CompanyActions } from '../actions/companies.actions';
import { Company, CompanyModel } from '../models/company.model';
import { selectCompanies, selectCompaniesData } from '../reducers/companies.reducer';
import { ConfirmationDialogActions } from '../actions/confirmation-dialog.actions';
import { BaseListingComponent } from '../base-listing.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
})
export class CompaniesComponent extends BaseListingComponent<Company> {
  companies$ = this.store.select(selectCompanies);
  tableDataSource$ = this.store.select(selectCompaniesData);

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.sortActive = 'id';
    this.sortDirection = 'asc';
    this.columns = ['corporationName', 'registrationNumber', 'status', 'activatedAt', 'subscriptionStatus', 'actions'];
    this.loadAction = CompanyActions.loadCompanies;
    this.reloadOnActions = [
      CompanyActions.saveCompanyDetailsSuccess,
      CompanyActions.toggleCompanySubscriptionStatusSuccess,
      CompanyActions.deleteCompanySuccess,
    ];

    super.syncFiltersWithRouteParams({
      params: ['corporationName', 'registrationNumber', 'status', 'subscriptionStatus'],
      afterHook: () => {
        // This will be triggered on the initial page load and whenever one of the params we are watching is changed
        super.ngOnInit();
        this.loadData({ page: 1 });
      },
    });
  }

  toggleSubscriptionStatus(company: CompanyModel): void {
    this.store.dispatch(
      ConfirmationDialogActions.show({
        data: {
          template: `
            Are you sure you want to ${company.isDisabled ? 'enable' : 'disable'}
            <strong>${company.corporationName}</strong>?
          `,
          confirm: {
            label: company.isDisabled ? 'Enable' : 'Disable',
            color: company.isDisabled ? 'primary' : 'warn',
          },
        },
        ok: () => {
          this.store.dispatch(CompanyActions.toggleCompanySubscriptionStatus({ data: company }));
        },
      })
    );
  }

  delete(item: Company | null): void {
    this.store.dispatch(
      ConfirmationDialogActions.show({
        data: {
          template: `
            Are you sure you want to delete <strong>${item.corporationName}</strong> company?
            <br>
            This action can not be undone.
          `,
          confirm: {
            label: 'Delete',
            color: 'warn',
          },
        },
        ok: () => {
          this.store.dispatch(CompanyActions.deleteCompany({ data: item }));
        },
      })
    );
  }

  onSearchUsers(params: Record<string, string>): void {
    this.router.navigate(['/companies/users'], { queryParams: params }).then(noop);
  }

  onSearchBookings(params: Record<string, string>): void {
    this.router.navigate(['/companies/bookings'], { queryParams: this.validateReferenceType(params) }).then(noop);
  }
}
