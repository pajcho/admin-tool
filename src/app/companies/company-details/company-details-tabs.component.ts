import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { CompanyModel } from '../../models/company.model';

@Component({
  selector: 'app-company-details-tabs',
  templateUrl: './company-details-tabs.component.html',
})
export class CompanyDetailsTabsComponent extends BaseComponent {
  @Input() company: CompanyModel;

  activeTab: 'bookings' | 'users' = 'bookings';
}
