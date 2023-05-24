import { Injectable } from '@angular/core';
import { Traveler, UserTitle } from './shared.model';
import { BookingStatus } from '../booking.model';
import { Adapter } from '../adapter';
import { BookingStatusV2 } from '../constants/booking-status.constants';

export enum CarTransmissionType {
  MANUAL = 'MANUAL GEARBOX',
  AUTOMATIC = 'AUTOMATIC GEARBOX',
}

export enum CarClass {
  MINI = 'MINI',
  ECONOMY = 'ECONOMY',
  COMPACT = 'COMPACT',
  INTERMEDIATE = 'INTERMEDIATE',
  STANDARD = 'STANDARD',
  FULL_SIZE = 'FULL_SIZE',
  LUXURY = 'LUXURY',
  OVERSIZE = 'OVERSIZE',
}

export enum CarCompany {
  HERTZ = 'HERTZ',
  SIXT = 'SIXT',
  AVIS = 'AVIS',
  EUROPCAR = 'EUROPCAR',
}

export enum AmountQualifier {
  INCLUDED = 'included',
  OPTIONAL = 'optional',
}

// TODO: This will be moved to Locize once implemented
export const carAgencyCancellationPolicyMap = {
  cancellationDetails: 'Cancellation fees might apply on Corporate Rates, please contact Rental car provider',
  dayBeforePickUpTime: 'Free Cancellation with full refund up until 24 hrs before the day of pickup',
  untilPickUpTime: 'Free cancellation up until pick up time',
};

export type CarAgencyCancellationPolicy = keyof typeof carAgencyCancellationPolicyMap;

export interface CarDetails {
  model: string;
  category: CarClass;
  type: string;
  transmission: CarTransmissionType;
  driveType: string;
  fuelAndDistance: string;
  airConditioner: boolean;
  typeCode: string;
  information: CarInformation;
}

export interface CarInformation {
  passengerCapacity: number;
  doorNumber: number;
  bootSize: number;
}

interface CarAgency {
  code: string;
  name: CarCompany;
  termsAndConditions: string;
  cancellation: CarCancellationPolicy;
}

export interface CarCancellationPolicy {
  fee: string;
  policy: string;
  policyKey: CarAgencyCancellationPolicy;
  cancellationInfo?: string;
  ratePolicy: string;
  ratePolicyKey: CarAgencyCancellationPolicy;
}

interface CarLocation {
  dateAndTime: string;
  latitude: number;
  longitude: number;
  significance: string;
  unit: string;
  value: string;
  address: CarAgencyAddress;
}

export interface CarAgencyAddress {
  street: string;
  city: string;
  code: string;
  name: string;
  countryCode: string;
}

export interface CarRatePrice {
  identifier: string;
  pnrIdentifier: string;
  agencyIdentifier: string;
  amount: number;
  currency: string;
  type: string;
  amountQualifier: null;
  code: string;
  planIndicator: string;
}

export interface CarMileagePolicy {
  type: string;
  qualifier: string;
  quantity: number;
  period: string;
}

export interface CarExtras {
  chargeType: string;
  amount: number;
  amountQualifier?: AmountQualifier;
  quantity: number;
  periodType?: string;
  currency?: string;
  chargeCode: string;
  freeText: string;
  unitPrice: number;
}

export interface CarOfferPrice {
  ratePrice: CarRatePrice;
  associatedCharges: CarExtras[];
  mileagePolicy: CarMileagePolicy;
}

interface CarDriver extends Traveler {
  userId: string;
  title: UserTitle;
  phoneNumber: string;
  dateOfBirth: string;
}

export interface RentalCarBooking {
  id: string;
  // TODO: Check Booking statuses since there is a lot of differences between V1 and V2
  status: BookingStatus | BookingStatusV2;
  vehicle: CarDetails;
  carAgency: CarAgency;
  pickup: CarLocation;
  dropOff: CarLocation;
  offerPriceInfo: CarOfferPrice[];
  driver: CarDriver;
  onlyBookerConfirmation: boolean;
}

export class RentalCarBookingModel implements RentalCarBooking {
  constructor(
    public id: string,
    public status: BookingStatus | BookingStatusV2,
    public vehicle: CarDetails,
    public carAgency: CarAgency,
    public pickup: CarLocation,
    public dropOff: CarLocation,
    public offerPriceInfo: CarOfferPrice[],
    public driver: CarDriver,
    public onlyBookerConfirmation: boolean
  ) {}

  get extras(): CarExtras[] {
    return this.offerPriceInfo[0].associatedCharges || [];
  }

  get includedExtras(): CarExtras[] {
    return this.extras.filter((item) => item.amountQualifier === AmountQualifier.INCLUDED);
  }

  get optionalExtras(): CarExtras[] {
    return this.extras.filter((item) => item.amountQualifier === AmountQualifier.OPTIONAL);
  }

  get basePrice(): number {
    return this.offerPriceInfo[0].ratePrice.amount || 0;
  }

  get currency(): string {
    return this.offerPriceInfo[0].ratePrice.currency;
  }

  get totalPrice(): number {
    return this.basePrice + this.optionalExtras.reduce((total, charge) => total + charge.amount, 0);
  }

  get bookingReference(): string {
    return this.offerPriceInfo?.[0].ratePrice?.pnrIdentifier;
  }

  get agencyLogo(): string {
    return `assets/car-companies-logos/${this.carAgency.name.toLowerCase()}.png`;
  }

  get hasManualTransmission(): boolean {
    return this.vehicle.transmission === CarTransmissionType.MANUAL;
  }

  get cancellationPolicy(): string {
    return carAgencyCancellationPolicyMap?.[this.carAgency.cancellation?.policyKey];
  }

  get cancellationRate(): string {
    return carAgencyCancellationPolicyMap?.[this.carAgency.cancellation?.ratePolicyKey];
  }
}

@Injectable({
  providedIn: 'root',
})
export class RentalCarBookingAdapter implements Adapter<RentalCarBooking> {
  adapt(item: RentalCarBooking): RentalCarBookingModel {
    return new RentalCarBookingModel(
      item?.id,
      item?.status,
      item?.vehicle,
      item?.carAgency,
      item?.pickup,
      item?.dropOff,
      item?.offerPriceInfo,
      item?.driver,
      item?.onlyBookerConfirmation
    );
  }
}
