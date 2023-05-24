import { Component } from '@angular/core';
import { BillingRequestActions } from '../actions/billing-requests.actions';
import { BillingRequest, BillingRequestModel, BillingRequestStatus } from '../models/billing-request.model';
import { selectBillingRequests, selectBillingRequestsData } from '../reducers/billing-requests.reducer';
import { ConfirmationDialogActions } from '../actions/confirmation-dialog.actions';
import { BaseListingComponent } from '../base-listing.component';

@Component({
  selector: 'app-billing-requests',
  templateUrl: './billing-requests.component.html',
})
export class BillingRequestsComponent extends BaseListingComponent<BillingRequestModel> {
  statuses: BillingRequestStatus[] = [
    BillingRequestStatus.PENDING,
    BillingRequestStatus.ENABLED,
    BillingRequestStatus.DENIED,
    BillingRequestStatus.BLOCKED,
  ];

  billingRequests$ = this.store.select(selectBillingRequests);
  tableDataSource$ = this.store.select(selectBillingRequestsData);

  ngOnInit(): void {
    this.sortActive = 'corporationName';
    this.sortDirection = 'asc';
    this.columns = ['corporationName', 'billingProfileRequestStatus', 'actions'];
    this.loadAction = BillingRequestActions.loadRequests;
    this.reloadOnActions = [BillingRequestActions.changeStatusSuccess];

    super.ngOnInit();

    // Display PENDING requests by default
    this.filter('billingProfileRequestStatus', BillingRequestStatus.PENDING);
  }

  approve(item: BillingRequest): void {
    this.changeStatus(item, BillingRequestStatus.ENABLED, 'approve', 'primary');
  }

  deny(item: BillingRequest): void {
    this.changeStatus(item, BillingRequestStatus.DENIED, 'deny', 'warn');
  }

  block(item: BillingRequest): void {
    this.changeStatus(item, BillingRequestStatus.BLOCKED, 'block', 'warn');
  }

  private changeStatus(item: BillingRequest, status: BillingRequestStatus, label: string, color: string): void {
    this.store.dispatch(
      ConfirmationDialogActions.show({
        data: {
          template: `Are you sure you want to ${label} billing request for <strong>${item.corporationName}</strong>?`,
          confirm: { label, color },
        },
        ok: () => {
          // Clone the request and merge with new status
          this.store.dispatch(
            BillingRequestActions.changeStatus({ data: { ...item, billingProfileRequestStatus: status } })
          );
        },
      })
    );
  }
}
