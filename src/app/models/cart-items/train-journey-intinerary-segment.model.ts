import { Injectable } from '@angular/core';
import { parseISO } from 'date-fns';
import { Adapter } from '../adapter';
import { Layover } from './shared.model';

export enum ItineraryPriceGroup {
  FIRST_CLASS = '1 class',
  SECOND_CLASS = '2 class',
  SEAT = 'Seat',
}

export interface TransportInformation {
  code: string;
  description: string;
  category?: string;
}

export interface TrainJourneyItinerarySegment {
  segmentId: string; // This is just integer number (i.e. 1, 2, 3, 4)
  uniqueSegmentId: string; // This is unique UUID
  transportInformation: {
    known: TransportInformation[];
    unknown: TransportInformation[];
  };
  departureDateTime: string;
  departureLocationName: string;
  departureLocationNameLong: string;
  departureTaxiOption: boolean;
  departureStationCode: string;
  arrivalDateTime: string;
  arrivalLocationName: string;
  arrivalLocationNameLong: string;
  arrivalTaxiOption: boolean;
  arrivalStationCode: string;
  travelMethod: string;
  productCode: string;
  transportId: string;
  segmentProducer: string;
  serviceBrandName: string;
  duration: number;
  bookingClass?: string; // TODO: Check type (FIRST, SECOND, etc.)
}

export class TrainJourneyItinerarySegmentModel implements TrainJourneyItinerarySegment {
  constructor(
    public segmentId: string,
    public uniqueSegmentId: string,
    public transportInformation: {
      known: TransportInformation[];
      unknown: TransportInformation[];
    },
    public departureDateTime: string,
    public departureLocationName: string,
    public departureLocationNameLong: string,
    public departureTaxiOption: boolean,
    public departureStationCode: string,
    public arrivalDateTime: string,
    public arrivalLocationName: string,
    public arrivalLocationNameLong: string,
    public arrivalTaxiOption: boolean,
    public arrivalStationCode: string,
    public travelMethod: string,
    public productCode: string,
    public transportId: string,
    public segmentProducer: string,
    public serviceBrandName: string,
    public duration: number,
    public bookingClass?: string,
    public layover?: Layover
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class TrainJourneyItinerarySegmentAdapter implements Adapter<TrainJourneyItinerarySegment> {
  adapt(
    item: TrainJourneyItinerarySegment,
    nextItem?: TrainJourneyItinerarySegment
  ): TrainJourneyItinerarySegmentModel {
    return new TrainJourneyItinerarySegmentModel(
      item?.segmentId,
      item?.uniqueSegmentId,
      item?.transportInformation,
      item?.departureDateTime,
      item?.departureLocationName,
      item?.departureLocationNameLong,
      item?.departureTaxiOption,
      item?.departureStationCode,
      item?.arrivalDateTime,
      item?.arrivalLocationName,
      item?.arrivalLocationNameLong,
      item?.arrivalTaxiOption,
      item?.arrivalStationCode,
      item?.travelMethod,
      item?.productCode,
      item?.transportId,
      item?.segmentProducer,
      item?.serviceBrandName,
      item?.duration,
      item?.bookingClass,
      this.getLayover(item, nextItem)
    );
  }

  private getLayover(item: TrainJourneyItinerarySegment, nextItem: TrainJourneyItinerarySegment): Layover {
    if (!nextItem) return null;

    // Get time difference between this segment and the next segment
    const start = parseISO(item.arrivalDateTime).getTime();
    const end = parseISO(nextItem.departureDateTime).getTime();
    const duration = end - start;

    if (!duration) return null;

    return {
      // milliseconds to minutes
      duration: duration ? Math.floor(duration / (60 * 1000)) : 0,
      location: item.arrivalLocationName,
    };
  }
}
