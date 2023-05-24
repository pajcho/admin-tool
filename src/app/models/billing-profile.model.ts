import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { MemberIds } from './member-ids.model';
import { PaymentType } from './payment.model';

export enum InvoiceSplit {
  NONE = 'NONE',
  COST_CENTER = 'COST_CENTER',
  YOUR_REFERENCE = 'YOUR_REFERENCE',
}

export enum InvoiceSplitProcessStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  IGNORED = 'IGNORED',
}

export interface PendingInvoiceSplitType {
  id: string;
  invoiceSplitType: InvoiceSplit;
  status: InvoiceSplitProcessStatus;
}

export interface BillingProfile extends MemberIds {
  id: string;
  city: string;
  contactEmail: string;
  contactFirstName: string;
  contactLastName: string;
  countryId: string;
  countryName: string;
  currency: string;
  legalName: string;
  streetName: string;
  taxId: string;
  zipcode: string;
  invoiceSplitType: InvoiceSplit;
  pendingInvoiceSplitType?: PendingInvoiceSplitType;
  vatNumber?: string;
  invoiceRecipientEmail?: string;
  billingAddress?: string;
  billingPeriod?: string;
  backOfficeCustomerId?: string;
  memberCount?: number;
}

export class BillingProfileModel implements BillingProfile {
  paymentType: PaymentType = PaymentType.BILLING_PROFILE;

  constructor(
    public id: string,
    public city: string,
    public contactEmail: string,
    public contactFirstName: string,
    public contactLastName: string,
    public countryId: string,
    public countryName: string,
    public currency: string,
    public legalName: string,
    public streetName: string,
    public taxId: string,
    public zipcode: string,
    public invoiceSplitType: InvoiceSplit,
    public pendingInvoiceSplitType: PendingInvoiceSplitType,
    public vatNumber: string,
    public invoiceRecipientEmail: string,
    public billingAddress: string,
    public billingPeriod: string,
    public backOfficeCustomerId: string,
    public memberCount: number,
    public groupIds: string[],
    public employeeIds: string[]
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class BillingProfileAdapter implements Adapter<BillingProfile> {
  adapt(item: BillingProfile): BillingProfileModel {
    return new BillingProfileModel(
      item.id,
      item.city,
      item.contactEmail,
      item.contactFirstName,
      item.contactLastName,
      item.countryId,
      item.countryName,
      item.currency,
      item.legalName,
      item.streetName,
      item.taxId,
      item.zipcode,
      item.invoiceSplitType,
      item?.pendingInvoiceSplitType,
      item?.vatNumber,
      item?.invoiceRecipientEmail,
      item?.billingAddress,
      item?.billingPeriod,
      item.backOfficeCustomerId,
      item?.memberCount,
      item.groupIds,
      item.employeeIds
    );
  }
}
