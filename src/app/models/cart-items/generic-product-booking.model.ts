import { Injectable } from '@angular/core';
import { differenceInDays } from 'date-fns';
import { Adapter } from '../adapter';
import { BookingAction, BookingPaymentStatus, BookingStatus, BookingType } from '../booking.model';

export const genericProductTypeMap = {
  GP_FIT_FLIGHTS: 'FIT Flights',
  GP_FIT_HOTELROOM: 'FIT Hotelroom',
  GP_FIT_TRAIN: 'FIT Train',
  GP_FIT_OTHER: 'FIT Other',
  GP_GROUP_FLIGHTS: 'GROUP (9+) Flights',
  GP_GROUP_HOTELROOM: 'GROUP (9+) Hotelroom',
  GP_GROUP_TRAIN: 'GROUP (9+) Train',
  GP_GROUP_OTHER: 'GROUP (9+) Other',
  GP_SAAS: 'Saas',
};

export type GenericProductType = keyof typeof genericProductTypeMap;

export interface GPCustomer {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface GPCreator {
  createdByType: string;
  createdById: string;
  createdAt: string;
  createdByName: string;
}

export interface GenericProduct {
  name: string;
  description: string;
  category: string;
  categoryId: string;
  productId: string;
  productName: string;
  requestId: string;
  paymentCategory: string;
  productType: GenericProductType;
  bookingReferenceId: string;
  vendorId: string;
  transactionSalesModel: string;
  paymentDate: string;
  requestedCheckIn: string;
  requestedCheckOut: string;
  netCost: number;
  purchaseCost: number;
  currency: string;
  purchaseCurrency: string;
  countryCode: string;
  countryName: string;
  posCountryCode: string;
  type: BookingType;
  createdByDTO: GPCreator;
  status: BookingStatus;
  // TODO: Check with BE why are we not returning array of actions every time
  action: BookingAction | BookingAction[];
  paymentStatus: BookingPaymentStatus;
  customer: GPCustomer;
  customerId: string;
  travelId: string;
}

export class GenericProductModel implements GenericProduct {
  constructor(
    public name: string,
    public description: string,
    public category: string,
    public categoryId: string,
    public productId: string,
    public productName: string,
    public requestId: string,
    public paymentCategory: string,
    public productType: GenericProductType,
    public bookingReferenceId: string,
    public vendorId: string,
    public transactionSalesModel: string,
    public paymentDate: string,
    public requestedCheckIn: string,
    public requestedCheckOut: string,
    public netCost: number,
    public purchaseCost: number,
    public currency: string,
    public purchaseCurrency: string,
    public countryCode: string,
    public countryName: string,
    public posCountryCode: string,
    public type: BookingType,
    public createdByDTO: GPCreator,
    public status: BookingStatus,
    public action: BookingAction | BookingAction[],
    public paymentStatus: BookingPaymentStatus,
    public customer: GPCustomer,
    public customerId: string,
    public travelId: string
  ) {}

  get productTypeLabel(): string {
    return genericProductTypeMap[this.productType];
  }

  get totalStay(): number {
    // We are counting days here, not nights, so we have to increase the result by +1
    return differenceInDays(new Date(this.requestedCheckOut), new Date(this.requestedCheckIn)) + 1;
  }

  get bookingReference(): string {
    return this.bookingReferenceId;
  }
}

@Injectable({
  providedIn: 'root',
})
export class GenericProductAdapter implements Adapter<GenericProduct> {
  adapt(item: GenericProduct): GenericProductModel {
    return new GenericProductModel(
      item?.name,
      item?.description,
      item?.category,
      item?.categoryId,
      item?.productId,
      item?.productName,
      item?.requestId,
      item?.paymentCategory,
      item?.productType,
      item?.bookingReferenceId,
      item?.vendorId,
      item?.transactionSalesModel,
      item?.paymentDate,
      item?.requestedCheckIn,
      item?.requestedCheckOut,
      item?.netCost,
      item?.purchaseCost,
      item?.currency,
      item?.purchaseCurrency,
      item?.countryCode,
      item?.countryName,
      item?.posCountryCode,
      item?.type,
      item?.createdByDTO,
      item?.status,
      item?.action || [],
      item?.paymentStatus,
      item?.customer,
      item?.customerId,
      item?.travelId
    );
  }
}
