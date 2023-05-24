import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export enum BillingRequestStatus {
  PENDING = 'PENDING',
  ENABLED = 'ENABLED',
  DENIED = 'DENIED',
  BLOCKED = 'BLOCKED',
}

export interface BillingRequest {
  id: string;
  active: boolean;
  billingProfileRequestStatus: BillingRequestStatus;
  corporationName: string;
  hasCorporateRate: boolean;
  stripeCustomerId?: string;
}

export class BillingRequestModel implements BillingRequest {
  constructor(
    public id: string,
    public active: boolean,
    public billingProfileRequestStatus: BillingRequestStatus,
    public corporationName: string,
    public hasCorporateRate: boolean,
    public stripeCustomerId?: string
  ) {}

  get isPending(): boolean {
    return this.billingProfileRequestStatus === BillingRequestStatus.PENDING;
  }

  get isDenied(): boolean {
    return this.billingProfileRequestStatus === BillingRequestStatus.DENIED;
  }

  get isApproved(): boolean {
    return this.billingProfileRequestStatus === BillingRequestStatus.ENABLED;
  }

  get isBlocked(): boolean {
    return this.billingProfileRequestStatus === BillingRequestStatus.BLOCKED;
  }
}

@Injectable({
  providedIn: 'root',
})
export class BillingRequestAdapter implements Adapter<BillingRequest> {
  adapt(item: BillingRequest): BillingRequestModel {
    return new BillingRequestModel(
      item.id,
      item.active,
      item.billingProfileRequestStatus,
      item.corporationName,
      item.hasCorporateRate,
      item.stripeCustomerId
    );
  }
}
