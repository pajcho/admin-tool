import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export enum VendorName {
  // [Flight product] related vendor names
  AMADEUS = 'Amadeus', // AMADEUS_GDS
  LUFTHANSA = 'LufthansaGroup', // LUFTHANSA_NDC
}

export interface Vendor {
  id: string;
  externalId: string;
  name: string;
  productIds: string[];
  active: boolean;
  // We will get this if we filter by productId because each product can have a different hard-coded vendor name
  // Example: AMADEUS_GDS -> Amadeus, LUFTHANSA_NDC -> LufthansaGroup, etc.
  vendorName?: VendorName;
}

export class VendorModel implements Vendor {
  constructor(
    public id: string,
    public externalId: string,
    public name: string,
    public productIds: string[],
    public active: boolean,
    public vendorName?: VendorName
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class VendorAdapter implements Adapter<Vendor> {
  adapt(item: Vendor): VendorModel {
    // Temporary hack since BE is returning string instead of boolean statuses
    if (['false', 'true'].includes((<unknown>item?.active) as string)) {
      item.active = ((<unknown>item.active) as string) === 'true';
    }

    return new VendorModel(item?.id, item?.externalId, item?.name, item?.productIds, !!item?.active, item?.vendorName);
  }
}
