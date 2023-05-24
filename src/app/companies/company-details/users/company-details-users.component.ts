import { Component, Input } from '@angular/core';
import { BaseListingComponent } from '../../../base-listing.component';
import { CompanyUser, CompanyUserModel } from '../../../models/company-user.model';
import { CompanyUserActions } from '../../../actions/company-users.actions';
import { selectCompanyUsers, selectCompanyUsersData } from '../../../reducers/company-users.reducer';
import { elementCrossFade } from '../../../utils/animations/element-cross-fade';
import { UserActions } from '../../../actions/users.actions';

@Component({
  selector: 'app-company-details-users',
  templateUrl: './company-details-users.component.html',
  animations: [elementCrossFade],
})
export class CompanyDetailsUsersComponent extends BaseListingComponent<CompanyUser> {
  @Input() companyId: string;

  companyUsers$ = this.store.select(selectCompanyUsers);
  tableDataSource$ = this.store.select(selectCompanyUsersData);

  ngOnInit(): void {
    this.sortActive = 'id';
    this.sortDirection = 'asc';
    this.columns = ['firstname', 'lastname', 'role', 'username', 'phone', 'actions'];
    this.loadAction = CompanyUserActions.loadCompanyUsers;

    super.ngOnInit();

    // Display only company users
    this.filter('companyId', this.companyId);
  }

  travelPortal(user: CompanyUserModel): void {
    this.store.dispatch(UserActions.getOverrideToken({ username: user.username }));
  }
}
