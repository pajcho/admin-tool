import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export enum CompanyStatus {
  NONE = 'NONE',
  AT_RISK = 'AT_RISK',
  VIP = 'VIP',
}

export enum SubscriptionStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  DUNNING = 'DUNNING',
  CANCELLED = 'CANCELLED',
  SUSPEND = 'SUSPEND',
  DISABLED = 'DISABLED',
  COMPLETED = 'COMPLETED',
}

export interface Company {
  id: string;
  corporationName: string;
  // Can be null in some cases, though it is not expected since it is a required value
  registrationNumber: string;
  // Can be null in some cases, though it is not expected since it is auto-generated
  activatedAt: string;
  agentNote: string;
  status: CompanyStatus;
  subscriptionStatus: SubscriptionStatus;
}

export class CompanyModel implements Company {
  constructor(
    public id: string,
    public corporationName: string,
    public registrationNumber: string,
    public activatedAt: string,
    public agentNote: string,
    public status: CompanyStatus,
    public subscriptionStatus: SubscriptionStatus
  ) {}

  get isDisabled(): boolean {
    return this.subscriptionStatus === SubscriptionStatus.DISABLED;
  }
}

@Injectable({
  providedIn: 'root',
})
export class CompanyAdapter implements Adapter<Company> {
  adapt(item: Company): CompanyModel {
    return new CompanyModel(
      item?.id,
      item?.corporationName,
      item?.registrationNumber,
      item?.activatedAt,
      item?.agentNote,
      // TODO: Since this is new column, check with BE if they can return NONE by default for old companies
      item?.status || CompanyStatus.NONE,
      item?.subscriptionStatus
    );
  }
}
