import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export enum VendorPaymentPresentation {
  // [Flight product + Amadeus vendor] related vendor types
  CASH = 'CASH', // BSP
  VCC = 'VCC', // Ixaris, Airplus
  LODGE_CARD = 'LODGE_CARD', // Diners
}

export interface VendorsPaymentProvider {
  id: string;
  name: string;
  externalId: string;
  vendorIds: string[];
  active: boolean;
  // We will get this if we filter by productId and vendorId because each
  // vendor can have different mapping for the same payment provider
  // Example: BSP -> CASH, Ixaris -> VCC, Diners -> LODGE_CARD, etc.
  vendorPaymentPresentation?: VendorPaymentPresentation;
}

export class VendorsPaymentProviderModel implements VendorsPaymentProvider {
  constructor(
    public id: string,
    public name: string,
    public externalId: string,
    public vendorIds: string[],
    public active: boolean,
    public vendorPaymentPresentation?: VendorPaymentPresentation
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class VendorsPaymentProviderAdapter implements Adapter<VendorsPaymentProvider> {
  adapt(item: VendorsPaymentProvider): VendorsPaymentProviderModel {
    return new VendorsPaymentProviderModel(
      item?.id,
      item?.name,
      item?.externalId,
      item?.vendorIds,
      !!item?.active,
      item?.vendorPaymentPresentation
    );
  }
}
