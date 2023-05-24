import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';
import { FlightSegment } from './flight.model';
import { Traveler, TravelerReferenceFields, TravelerType, UserTitle } from './shared.model';

export interface FlightTicket {
  ticketNo: string;
  segment: FlightSegment[];
}

export interface FlightTraveler extends Traveler {
  userId: string;
  title: UserTitle;
  middleName: string;
  birthday: string;
  loyaltyCardProvider: string;
  loyaltyCardNumber: string;
  emailConfirmation: boolean;
  travelerType: TravelerType;
  flightTickets: FlightTicket[];
  costCenterId: string;
  addons?: [];
  exchanged?: boolean;
}

export class FlightTravelerModel implements FlightTraveler {
  constructor(
    public id: string,
    public userId: string,
    public title: UserTitle,
    public firstName: string,
    public lastName: string,
    public middleName: string,
    public birthday: string,
    public loyaltyCardProvider: string,
    public loyaltyCardNumber: string,
    public email: string,
    public emailConfirmation: boolean,
    public travelerType: TravelerType,
    public flightTickets: FlightTicket[],
    public costCenterId: string,
    public addons: [],
    public exchanged: boolean,
    public travelerReferenceFields: TravelerReferenceFields
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

@Injectable({
  providedIn: 'root',
})
export class FlightTravelerAdapter implements Adapter<FlightTraveler> {
  adapt(item: FlightTraveler): FlightTravelerModel {
    return new FlightTravelerModel(
      item?.id,
      item?.userId,
      item?.title,
      item?.firstName,
      item?.lastName,
      item?.middleName,
      item?.birthday,
      item?.loyaltyCardProvider,
      item?.loyaltyCardNumber,
      item?.email,
      item?.emailConfirmation,
      item?.travelerType,
      item?.flightTickets,
      item?.costCenterId,
      item?.addons,
      item?.exchanged,
      item?.travelerReferenceFields
    );
  }
}
