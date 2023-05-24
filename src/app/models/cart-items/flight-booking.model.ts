import { Injectable } from '@angular/core';
import { compareAsc } from 'date-fns';
import { Adapter } from '../adapter';
import { BookingAction, BookingPaymentStatus, BookingStatus } from '../booking.model';
import { Flight, FlightAdapter, FlightModel, FlightSegment } from './flight.model';
import { FlightTraveler, FlightTravelerAdapter, FlightTravelerModel } from './flight-traveler.model';

export interface BookingReference {
  reference: string;
  source: string;
}

export interface FlightBooking {
  id: string;
  totalPrice: number;
  currency: string;
  co2EmissionInGrams: number;
  departingFlightDeparture: string;
  departingFlightDuration: number;
  arrivingFlightDuration: number;
  numberOfStops: number;
  flights: Flight[];
  travelers: FlightTraveler[];
  bookingReference: BookingReference;
  status: BookingStatus;
  action: BookingAction | BookingAction[];
  paymentStatus: BookingPaymentStatus;
  hasExchange: boolean;
  exchanged: boolean;
  packageId?: string;
}

export class FlightBookingModel implements FlightBooking {
  constructor(
    public id: string,
    public totalPrice: number,
    public currency: string,
    public co2EmissionInGrams: number,
    public departingFlightDeparture: string,
    public departingFlightDuration: number,
    public arrivingFlightDuration: number,
    public numberOfStops: number,
    public flights: FlightModel[],
    public travelers: FlightTravelerModel[],
    public bookingReference: BookingReference,
    public status: BookingStatus,
    public action: BookingAction | BookingAction[],
    public paymentStatus: BookingPaymentStatus,
    public hasExchange: boolean,
    public exchanged: boolean,
    public packageId: string
  ) {}

  get firstFlight(): FlightModel {
    return this.flights[0];
  }

  get lastFlight(): FlightModel {
    return this.flights[this.flights.length - 1];
  }

  // Get all segments in one place. Useful when we need to quickly filter through all flight segments
  get segments(): FlightSegment[] {
    return this.flights.flatMap(({ segments }) => segments);
  }
}

@Injectable({
  providedIn: 'root',
})
export class FlightBookingAdapter implements Adapter<FlightBooking> {
  adapt(item: FlightBooking): FlightBookingModel {
    return new FlightBookingModel(
      item?.id,
      item?.totalPrice,
      item?.currency,
      item?.co2EmissionInGrams,
      item?.departingFlightDeparture,
      item?.departingFlightDuration,
      item?.arrivingFlightDuration,
      item?.numberOfStops,
      (item?.flights || [])
        .map((item) => new FlightAdapter().adapt(item))
        .sort((a: FlightModel, b: FlightModel) => {
          // BE can return flights in random order, so we need to make sure they are always sorted by date
          return compareAsc(new Date(a.firstSegment.departure.time), new Date(b.firstSegment.departure.time));
        }),
      (item?.travelers || []).map((item) => new FlightTravelerAdapter().adapt(item)),
      item?.bookingReference,
      item?.status,
      item?.action,
      item?.paymentStatus,
      item?.hasExchange,
      item?.exchanged,
      item?.packageId
    );
  }
}
