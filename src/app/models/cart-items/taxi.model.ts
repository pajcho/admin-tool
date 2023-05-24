import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';
import { BookingStatus } from '../booking.model';
import { CancellationPolicy, Price, Traveler } from './shared.model';

export const taxiTransferTypeMap = {
  PRIVATE: 'Private',
  SHARED: 'Shared',
};

export type TaxiTransferType = keyof typeof taxiTransferTypeMap;

export const taxiTypeMap = {
  FLIGHT: 'Flight',
  TRAIN: 'Train',
};

export type TaxiType = keyof typeof taxiTypeMap;

export const taxiOfferVehicleCategoryMap = {
  ST: 'Standard',
  BU: 'Business',
  FC: 'First Class',
};

export type TaxiOfferVehicleCategory = keyof typeof taxiOfferVehicleCategoryMap;

export interface TaxiTraveller extends Traveler {
  id: string;
  firstName: string;
  lastName: string;
}

export interface TaxiLocationSegment {
  datetime: string;
  // Location code will only be available if the location is airport or train station, not a regular address
  locationCode: string | null;
  address: string;
  city: string;
  zip: string;
  country: string;
  lat: number;
  lon: number;
}

export interface TaxiServiceProvider {
  name: string;
  code: string;
}

export interface TaxiVehicle {
  category: TaxiOfferVehicleCategory;
  description: string;
  seatCount: number;
  baggageCount: number;
}

// TODO: [taxi] this one should be removed in favor of TaxiBooking as I think its not even used
export interface Taxi {
  id: string;
  status: BookingStatus;
  travelers: TaxiTraveller[];
  start: TaxiLocationSegment;
  end: TaxiLocationSegment;
  taxiType: TaxiType;
  transferType: TaxiTransferType;
  serviceProvider: TaxiServiceProvider;
  offerId: string;
  vehicle: TaxiVehicle;
  cancellationPolicies: CancellationPolicy[];
  price: Price;

  // TODO: [taxi] This is a placeholder for extraItems that we need to implement in future iteration
  items: any[];

  // Applicable for flights and trains - will be null for regular taxis
  bookingId: string;
  segmentId: string;
}

// TODO: [taxi] this one should be removed in favor of TaxiBookingModel as I think its not even used
export class TaxiModel implements Taxi {
  constructor(
    public id: string,
    public bookingId: string,
    public cancellationPolicies: CancellationPolicy[],
    public end: TaxiLocationSegment,
    public price: Price,
    public offerId: string,
    public segmentId: string,
    public serviceProvider: TaxiServiceProvider,
    public start: TaxiLocationSegment,
    public status: BookingStatus,
    public taxiType: TaxiType,
    public transferType: TaxiTransferType,
    public travelers: TaxiTraveller[],
    public vehicle: TaxiVehicle,
    public items: any[]
  ) {}
}

// TODO: [taxi] this one should be removed in favor of TaxiBookingAdapter as I think its not even used
@Injectable({
  providedIn: 'root',
})
export class TaxiAdapter implements Adapter<Taxi> {
  adapt(item: Taxi): TaxiModel {
    return new TaxiModel(
      item?.id,
      item?.bookingId,
      item?.cancellationPolicies,
      item?.end,
      item?.price,
      item?.offerId,
      item?.segmentId,
      item?.serviceProvider,
      item?.start,
      item?.status,
      item?.taxiType,
      item?.transferType,
      item?.travelers,
      item?.vehicle,
      item?.items
    );
  }
}
