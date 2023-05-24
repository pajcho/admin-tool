import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';
import {
  TaxiLocationSegment,
  TaxiServiceProvider,
  TaxiTransferType,
  TaxiTraveller,
  TaxiType,
  TaxiVehicle,
} from './taxi.model';
import { BookingStatus, BookingType } from '../booking.model';
import { CancellationPolicy, Price } from './shared.model';
import { FlightBookingModel } from './flight-booking.model';
import { TrainBookingModel } from './train-booking.model';

export interface TaxiBooking {
  id: string;
  status: BookingStatus;
  bookingReference: string;
  type: BookingType.TAXI;
  start: TaxiLocationSegment;
  end: TaxiLocationSegment;
  taxiType: TaxiType;
  transferType: TaxiTransferType;
  serviceProvider: TaxiServiceProvider;
  offerId: string;
  vehicle: TaxiVehicle;
  travelers: TaxiTraveller[];
  cancellationPolicies: CancellationPolicy[];
  price: Price;

  // TODO: [taxi] This is a placeholder for extraItems that we need to implement in future iteration
  items: any[];

  // Applicable for flights and trains - will be null for regular taxis
  bookingId: string;
  segmentId: string;
}

export class TaxiBookingModel implements TaxiBooking {
  constructor(
    public id: string,
    public status: BookingStatus,
    public bookingReference: string,
    public type: BookingType.TAXI,
    public start: TaxiLocationSegment,
    public end: TaxiLocationSegment,
    public taxiType: TaxiType,
    public transferType: TaxiTransferType,
    public serviceProvider: TaxiServiceProvider,
    public offerId: string,
    public vehicle: TaxiVehicle,
    public travelers: TaxiTraveller[],
    public cancellationPolicies: CancellationPolicy[],
    public price: Price,
    public items: any[],
    public bookingId: string,
    public segmentId: string,
    public stationName: string,
    public fromStation: boolean
  ) {}

  get pickupLocation(): string {
    return this.fromStation
      ? `${this.stationName}, ${this.start.locationCode}`
      : `${this.start.address}, ${this.start.city}`;
  }

  get dropOffLocation(): string {
    return this.fromStation ? `${this.end.address}, ${this.end.city}` : `${this.stationName}, ${this.end.locationCode}`;
  }
}

@Injectable({
  providedIn: 'root',
})
export class TaxiBookingAdapter implements Adapter<TaxiBooking> {
  adapt(item: TaxiBooking, bookings?: (FlightBookingModel | TrainBookingModel)[]): TaxiBookingModel {
    const fromStation = !!item.start.locationCode;
    const stationName = this.getStationName(item, bookings, fromStation);

    return new TaxiBookingModel(
      item?.id,
      item?.status,
      item?.bookingReference,
      item?.type,
      item?.start,
      item?.end,
      item?.taxiType,
      item?.transferType,
      item?.serviceProvider,
      item?.offerId,
      item?.vehicle,
      item?.travelers,
      item?.cancellationPolicies,
      item?.price,
      item?.items,
      item?.bookingId,
      item?.segmentId,
      stationName,
      fromStation
    );
  }

  private getStationName(
    item: TaxiBooking,
    bookings: (FlightBookingModel | TrainBookingModel)[],
    fromStation: boolean
  ) {
    const booking = bookings.find(({ id }) => id === item.bookingId);

    // Flight taxi
    if (booking instanceof FlightBookingModel) {
      const segment = booking.segments.find((segment) => segment.id === item.segmentId);

      if (segment) {
        return fromStation ? segment.arrival.airportName : segment.departure.airportName;
      }
    }

    // Train taxi
    if (booking instanceof TrainBookingModel) {
      const segment = booking.segments.find((segment) => segment.uniqueSegmentId === item.segmentId);

      if (segment) {
        return fromStation ? segment.arrivalLocationName : segment.departureLocationName;
      }
    }

    return undefined;
  }
}
