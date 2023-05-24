import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { MemberIds } from './member-ids.model';
import { PaymentType } from './payment.model';
import { Country } from './country.model';

export enum LodgeCardProviderCode {
  CCDC = 'CCDC',
  CCTP = 'CCTP',
  CCCA = 'CCCA',
  CCAX = 'CCAX',
}

export interface LodgeCard extends MemberIds {
  id: string;
  name: string;
  creditCardNumber: string;
  expiryDate: string;
  provider: LodgeCardProviderCode;
  currency: string;
  country: Country;
  contactFirstName: string;
  contactLastName: string;
  contactEmail: string;
  vatNumber: string;
  invoiceRecipientEmail: string;
  clientCorporationId: string;
  addressLine: string;
  city: string;
  companyLegalName: string;
  companyRegistrationNumber: string;
  postalCode: string;
  expiryDateTrailingValue: string;
  backOfficeCustomerId?: string;
  isOnboarded: boolean;
  memberCount: number;
}

export class LodgeCardModel implements LodgeCard {
  paymentType: PaymentType = PaymentType.LODGE_CARD;

  constructor(
    public id: string,
    public name: string,
    public creditCardNumber: string,
    public expiryDate: string,
    public provider: LodgeCardProviderCode,
    public currency: string,
    public country: Country,
    public contactFirstName: string,
    public contactLastName: string,
    public contactEmail: string,
    public vatNumber: string,
    public invoiceRecipientEmail: string,
    public clientCorporationId: string,
    public addressLine: string,
    public city: string,
    public companyLegalName: string,
    public companyRegistrationNumber: string,
    public postalCode: string,
    public expiryDateTrailingValue: string,
    public backOfficeCustomerId: string,
    public isOnboarded: boolean,
    public memberCount: number,
    public groupIds: string[],
    public employeeIds: string[]
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class LodgeCardAdapter implements Adapter<LodgeCard> {
  adapt(item: LodgeCard): LodgeCardModel {
    return new LodgeCardModel(
      item.id,
      item.name,
      item.creditCardNumber,
      item.expiryDate,
      item.provider,
      item.currency,
      item.country,
      item.contactFirstName,
      item.contactLastName,
      item.contactEmail,
      item.vatNumber,
      item.invoiceRecipientEmail,
      item.clientCorporationId,
      item.addressLine,
      item.city,
      item.companyLegalName,
      item.companyRegistrationNumber,
      item.postalCode,
      item.expiryDateTrailingValue,
      item.backOfficeCustomerId,
      item.isOnboarded,
      item.memberCount,
      item.groupIds,
      item.employeeIds
    );
  }
}
