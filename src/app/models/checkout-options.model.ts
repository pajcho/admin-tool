import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { PaymentType } from './payment.model';

export interface ReferenceFieldItem {
  description: string;
  id: string;
  name: string;
  type: string;
}

export interface CheckoutOptionsResponse {
  paymentOptions: { name: PaymentType; selected: boolean }[];
  project?: {
    mandatory: boolean;
    label: string;
    items: ReferenceFieldItem[];
  };
  purposeOfTrip?: {
    mandatory: boolean;
    label: string;
    items: ReferenceFieldItem[];
  };
  yourReference?: {
    mandatory: boolean;
    label: string;
  };
}

export interface CheckoutOptions extends CheckoutOptionsResponse {}

export class CheckoutOptionsModel implements CheckoutOptions {
  // TODO: Add proper types
  constructor(public paymentOptions: any, public project: any, public purposeOfTrip: any, public yourReference: any) {}
}

@Injectable({
  providedIn: 'root',
})
export class CheckoutOptionsAdapter implements Adapter<CheckoutOptions> {
  adapt(item: CheckoutOptions): CheckoutOptionsModel {
    return new CheckoutOptionsModel(item.paymentOptions, item?.project, item?.purposeOfTrip, item?.yourReference);
  }
}

export type BookingChannelsResponse = string[];

export class BookingChannelModel {
  constructor(public name: string, public value: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class BookingChannelsAdapter implements Adapter<BookingChannelModel> {
  adapt(item: string): BookingChannelModel {
    return new BookingChannelModel(item, item);
  }
}
