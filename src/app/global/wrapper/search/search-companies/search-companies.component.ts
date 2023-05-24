import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CompanyStatus, SubscriptionStatus } from '../../../../models/company.model';
import { elementCrossFade } from '../../../../utils/animations/element-cross-fade';
import { BaseSearchComponent } from '../base-search.component';

@Component({
  selector: 'dib-search-companies',
  templateUrl: './search-companies.component.html',
  animations: [elementCrossFade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchCompaniesComponent extends BaseSearchComponent implements OnInit {
  companyStatuses: CompanyStatus[] = [CompanyStatus.NONE, CompanyStatus.AT_RISK, CompanyStatus.VIP];
  subscriptionStatuses: SubscriptionStatus[] = [
    SubscriptionStatus.ACTIVE,
    SubscriptionStatus.DISABLED,
    SubscriptionStatus.PENDING,
    SubscriptionStatus.DUNNING,
    SubscriptionStatus.SUSPEND,
    SubscriptionStatus.COMPLETED,
    SubscriptionStatus.CANCELLED,
  ];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      corporationName: [],
      registrationNumber: [],
      status: [],
      subscriptionStatus: [],
    });

    // Filters input will change whenever URL changes, and we have to watch for changes here
    super.syncFormWithRouteParams({
      params: ['corporationName', 'registrationNumber', 'status', 'subscriptionStatus'],
    });
  }
}
