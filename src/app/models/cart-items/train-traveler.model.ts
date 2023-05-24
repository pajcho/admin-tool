import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';
import { Traveler, TravelerReferenceFields } from './shared.model';

// TODO: populate enum with other types of addon types received from the BE
export enum AddonRequestType {
  TRAIN_ADDON = 'TRAIN_ADDON',
}

export enum AddonType {
  SEAT = 'SEAT', // TODO: Check if this is correct as it might be SEATING
  SEATING = 'SEATING',
  OPTION = 'OPTION',
}

// TODO: populate enum with other addon statuses received from the BE
export enum AddonStatus {
  BOOKED = 'BOOKED',
}

export interface TrainOptionSelection {
  journeyId: number;
  itineraryId: number;
  segmentId: string;
  type: string;
  description: string;
}

export interface TrainSeatingSelection {
  journeyId: number;
  itineraryId: number;
  segmentId: string;
  description: string;
  carriage: string;
  seat: string;
  placementOrientation: string;
  placementCharacteristics: string;
}

export interface TrainTravelerAddon {
  id: string;
  itineraryId: number;
  journeyId: number;
  segmentId: string;
  travellerId: string;
  parentId: string;
  price: number;
  currency: string;
  status: AddonStatus;
  requestType: AddonRequestType;
  addonType: AddonType;
  description: string;
  integrationFee: number;
}

export interface TrainTraveler extends Traveler {
  travellerNumber: number;
  phoneNumber: string;
  optionSelections: TrainOptionSelection[];
  seatingSelections: TrainSeatingSelection[];
  addons: TrainTravelerAddon[];
  userId: string;
  costCenterId?: string;
}

export class TrainTravelerModel implements TrainTraveler {
  constructor(
    public id: string,
    public travellerNumber: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string,
    public optionSelections: TrainOptionSelection[],
    public seatingSelections: TrainSeatingSelection[],
    public addons: TrainTravelerAddon[],
    public userId: string,
    public costCenterId: string,
    public travelerReferenceFields: TravelerReferenceFields
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get seatingSelectionDescription(): string {
    return this.seatingSelections?.[0]?.description || '';
  }

  get allOptionSelections(): string {
    return this.optionSelections
      .reduce((options, selection) => {
        options.push(selection.type);

        return options;
      }, [])
      .join(', ');
  }

  segmentSeatingSelection(
    journeyId: TrainSeatingSelection['journeyId'],
    itineraryId: TrainSeatingSelection['itineraryId'],
    segmentId: TrainSeatingSelection['segmentId']
  ): string {
    return (
      this.seatingSelections.find((item) => {
        return item.journeyId === journeyId && item.itineraryId === itineraryId && item.segmentId === segmentId;
      })?.description || ''
    );
  }

  segmentOptionSelection(
    journeyId: TrainSeatingSelection['journeyId'],
    itineraryId: TrainSeatingSelection['itineraryId'],
    segmentId: TrainSeatingSelection['segmentId']
  ): string {
    return this.optionSelections
      .filter((item) => {
        return item.journeyId === journeyId && item.itineraryId === itineraryId && item.segmentId === segmentId;
      })
      .reduce((options, selection) => {
        options.push(selection.type);

        return options;
      }, [])
      .join(', ');
  }
}

@Injectable({
  providedIn: 'root',
})
export class TrainTravelerAdapter implements Adapter<TrainTraveler> {
  adapt(item: TrainTraveler): TrainTravelerModel {
    return new TrainTravelerModel(
      item?.id,
      item?.travellerNumber,
      item?.firstName,
      item?.lastName,
      item?.email,
      item?.phoneNumber,
      item?.optionSelections,
      item?.seatingSelections,
      item?.addons,
      item?.userId,
      item?.costCenterId,
      item?.travelerReferenceFields
    );
  }
}
