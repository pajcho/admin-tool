import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { productTypeIconsMap } from './constants/product-type-icons.constants';

export enum BookingMode {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
}

export enum BookingReferenceTypes {
  Hotel = 'Hotel',
  Flight = 'Flight',
  Train = 'Train',
  RentalCar = 'Rental Car',
  Taxi = 'Taxi',
  Bus = 'Bus',
}

// TODO: Review these statuses and cross compare with BookingStatusV2 list, since there are a lot of differences
export const bookingStatusMap = {
  DRAFT: 'Total price of trip',
  COMPLETED: 'Paid & confirmed',
  REJECTED: 'Rejected by the approver',
  FAILED: 'Failed',
  PENDING: 'Pending',
  EDITED: 'Edited',
  PAYMENT_INITIATED: 'Payment initiated',
  ORDER_PROCESSING: 'Order Processing',
  PENDING_APPROVAL: 'Pending Approval',
  INTERNAL_ERROR: 'Booking issue - contact customer support',
};

export type BookingStatus = keyof typeof bookingStatusMap;

export enum BookingUserType {
  ADMINISTRATOR = 'ADMINISTRATOR',
  PROVIDER = 'PROVIDER',
  CUSTOMER = 'CUSTOMER',
  AGENT = 'AGENT',
}

export enum BookingAction {
  CANCELLABLE = 'CANCELLABLE',
  NONE = 'NONE',
  DELETABLE = 'DELETABLE',
  REFUNDABLE = 'REFUNDABLE',
}

export enum BookingType {
  CM_BOOKING = 'CM_BOOKING',
  FLIGHT = 'FLIGHT',
  TRAIN = 'TRAIN',
  GENERICPRODUCT = 'GENERICPRODUCT',
  TAXI = 'TAXI',
  CAR = 'CAR',
}

export enum BookingPaymentStatus {
  UNPAID = 'UNPAID',
  RESERVED = 'RESERVED',
  COMPLETED = 'COMPLETED',
  REFUNDED = 'REFUNDED',
  NONE = 'NONE',
}

export interface BookingCompany {
  id: string;
  name: string;
}

export interface BookingTraveler {
  id: string;
  name: string;
  username: string;
}

export interface Booking {
  cartId: string;
  tripId: string;
  tripName: string;
  status: BookingStatus;
  company: BookingCompany;
  booker: BookingTraveler;
  travelers: BookingTraveler[];
  productTypes: string[];
  numberOfItems: number;
  startDate: string;
  endDate: string;
  agentNote: string;
}

export class BookingModel implements Booking {
  constructor(
    public cartId: string,
    public tripId: string,
    public tripName: string,
    public status: BookingStatus,
    public company: BookingCompany,
    public booker: BookingTraveler,
    public travelers: BookingTraveler[],
    public productTypes: string[],
    public numberOfItems: number,
    public startDate: string,
    public endDate: string,
    public agentNote: string
  ) {}

  /**
   * Due to some CI issue sometimes BE will return a traveller where all the values are null
   * including the name. We want to filter those travelers out.
   */
  allTravelers(): BookingTraveler[] {
    return this.travelers.filter((item) => item.name);
  }

  /**
   * Return only list of valid traveler profiles identified by ID
   * Also keep the list unique by comparing the ID
   */
  travelerProfiles(): BookingTraveler[] {
    return this.allTravelers()
      .filter((item) => item.id)
      .reduce((travelers, traveler) => {
        // Filter out duplicate travelers by comparing traveler ID
        if (!travelers.some((item) => item.id === traveler.id)) {
          travelers.push(traveler);
        }

        return travelers;
      }, []);
  }

  productIcon(product: string): string {
    return productTypeIconsMap[product?.toLowerCase()] || productTypeIconsMap.default;
  }
}

@Injectable({
  providedIn: 'root',
})
export class BookingAdapter implements Adapter<Booking> {
  adapt(item: Record<any, any>): BookingModel {
    return new BookingModel(
      item?.cartId,
      item?.tripId,
      item?.tripName,
      item?.status,
      item?.company,
      item?.booker,
      item?.travelers || [],
      item?.productTypes || [],
      item?.numberOfItems,
      item?.startDate,
      item?.endDate,
      item?.agentNote
    );
  }
}
