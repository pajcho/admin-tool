import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export interface VatCategory {
  id: string;
  name: string;
  productId: string;
  productName: string;
  countryId: string;
  active: boolean;
  externalId: string;
  vatPercentage: number;
}

export class VatCategoryModel implements VatCategory {
  constructor(
    public id: string,
    public name: string,
    public productId: string,
    public productName: string,
    public countryId: string,
    public active: boolean,
    public externalId: string,
    public vatPercentage: number
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class VatCategoryAdapter implements Adapter<VatCategory> {
  adapt(item: VatCategory): VatCategoryModel {
    return new VatCategoryModel(
      item?.id,
      item?.name,
      item?.productId,
      item?.productName,
      item?.countryId,
      item?.active,
      item?.externalId,
      item?.vatPercentage
    );
  }
}
