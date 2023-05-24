import { Component, Injector } from '@angular/core';
import { noop } from 'rxjs';
import { BaseListingComponent } from '../../../base-listing.component';
import { CompanyUser } from '../../../models/company-user.model';
import { CompanyUserActions } from '../../../actions/company-users.actions';
import { selectCompanyUsers, selectCompanyUsersData } from '../../../reducers/company-users.reducer';

@Component({
  selector: 'app-company-users-list',
  templateUrl: './company-users-list.component.html',
})
export class CompanyUsersListComponent extends BaseListingComponent<CompanyUser> {
  companyUsers$ = this.store.select(selectCompanyUsers);
  tableDataSource$ = this.store.select(selectCompanyUsersData);

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.sortActive = 'id';
    this.sortDirection = 'asc';
    this.columns = ['firstname', 'lastname', 'companyName', 'role', 'username', 'phone', 'actions'];
    this.loadAction = CompanyUserActions.loadCompanyUsers;
    this.reloadOnActions = [CompanyUserActions.saveCompanyUserDetailsSuccess];

    super.syncFiltersWithRouteParams({
      params: ['firstname', 'lastname', 'companyName', 'role', 'username', 'phone'],
      afterHook: () => {
        // This will be triggered on the initial page load and whenever one of the params we are watching is changed
        super.ngOnInit();
        this.loadData({ page: 1 });
      },
    });
  }

  onSearchCompanies(params: Record<string, string>): void {
    this.router.navigate(['/companies'], { queryParams: params }).then(noop);
  }

  onSearchBookings(params: Record<string, string>): void {
    this.router.navigate(['/companies/bookings'], { queryParams: this.validateReferenceType(params) }).then(noop);
  }
}
