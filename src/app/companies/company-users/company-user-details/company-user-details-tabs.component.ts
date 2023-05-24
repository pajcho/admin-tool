import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../base.component';
import { CompanyUserModel } from '../../../models/company-user.model';

@Component({
  selector: 'app-company-user-details-tabs',
  templateUrl: './company-user-details-tabs.component.html',
})
export class CompanyUserDetailsTabsComponent extends BaseComponent {
  @Input() companyUser: CompanyUserModel;

  activeTab: 'active' | 'past' = 'active';
}
