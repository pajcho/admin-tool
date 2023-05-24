import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { elementCrossFade } from '../../../../utils/animations/element-cross-fade';
import { CompanyUserRole } from '../../../../models/company-user.model';
import { BaseSearchComponent } from '../base-search.component';

@Component({
  selector: 'dib-search-users',
  templateUrl: './search-users.component.html',
  animations: [elementCrossFade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchUsersComponent extends BaseSearchComponent implements OnInit {
  userRoles: CompanyUserRole[] = [CompanyUserRole.ADMIN, CompanyUserRole.TRAVELLER];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: [],
      lastname: [],
      username: [],
      phone: [],
      role: [],
      companyName: [],
    });

    // Filters input will change whenever URL changes, and we have to watch for changes here
    super.syncFormWithRouteParams({ params: ['firstname', 'lastname', 'username', 'phone', 'role', 'companyName'] });
  }
}
