import { Injectable } from '@angular/core';
import { Booker, Price } from './shared.model';
import { BookingMode, BookingStatus } from '../booking.model';
import { Adapter } from '../adapter';
import { TrainJourney, TrainJourneyAdapter, TrainJourneyModel } from './train-journey.model';
import { TrainTraveler, TrainTravelerAdapter, TrainTravelerModel } from './train-traveler.model';
import { BookingStatusV2 } from '../constants/booking-status.constants';
import { TrainJourneyItinerarySegmentModel } from './train-journey-intinerary-segment.model';

export interface TrainBooking {
  id: string;
  preOrderId: string;
  status: BookingStatus | BookingStatusV2;
  bookingReference: string;
  booker: Booker;
  rebookable: boolean;
  refundable: boolean;
  dynamicCancellationPolicy: boolean;
  cancelable: boolean;
  travellers: TrainTraveler[];
  journeys: TrainJourney[];
  subTotalPrice: Price;
  bookingMode: BookingMode;
  co2EmissionInGrams: number;
  integrationFee: number;
}

export class TrainBookingModel implements TrainBooking {
  constructor(
    public id: string,
    public preOrderId: string,
    public status: BookingStatus | BookingStatusV2,
    public bookingReference: string,
    public booker: Booker,
    public rebookable: boolean,
    public refundable: boolean,
    public dynamicCancellationPolicy: boolean,
    public cancelable: boolean,
    public travellers: TrainTravelerModel[],
    public journeys: TrainJourneyModel[],
    public subTotalPrice: Price,
    public bookingMode: BookingMode,
    public co2EmissionInGrams: number,
    public integrationFee: number
  ) {}

  get firstJourney(): TrainJourneyModel {
    return this.journeys[0];
  }

  // Get all segments in one place. Useful when we need to quickly filter through all train segments
  get segments(): TrainJourneyItinerarySegmentModel[] {
    return this.journeys.flatMap(({ itineraries }) => itineraries.flatMap(({ segments }) => segments));
  }
}

@Injectable({
  providedIn: 'root',
})
export class TrainBookingAdapter implements Adapter<TrainBooking> {
  adapt(item: TrainBooking): TrainBookingModel {
    return new TrainBookingModel(
      item?.id,
      item?.preOrderId,
      item?.status,
      item?.bookingReference,
      item?.booker,
      item?.rebookable,
      item?.refundable,
      item?.dynamicCancellationPolicy,
      item?.cancelable,
      (item?.travellers || []).map((item) => new TrainTravelerAdapter().adapt(item)),
      (item?.journeys || []).map((item) => new TrainJourneyAdapter().adapt(item)),
      item?.subTotalPrice,
      item?.bookingMode,
      item?.co2EmissionInGrams,
      item?.integrationFee
    );
  }
}
