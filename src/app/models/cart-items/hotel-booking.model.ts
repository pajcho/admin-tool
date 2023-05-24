import { Injectable } from '@angular/core';
import { differenceInDays } from 'date-fns';
import { Adapter } from '../adapter';
import { BookingAction, BookingPaymentStatus, BookingStatus, BookingType } from '../booking.model';
import { HotelRoom, HotelRoomAdapter, HotelRoomModel } from './hotel-room.model';
import { Booker, CancellationPolicy, LocationPreferences, Position, Price } from './shared.model';

export enum ReservationType {
  ID = 'ID',
  PIN = 'PIN',
}

interface ReservationCode {
  reservationCode: string;
  reservationType: ReservationType;
}

interface HotelDescription {
  position: Position;
  hotelName: string;
  address: string;
  phoneNumber: string;
  email: string;
  hotelImage: string;
  reservationCodes: ReservationCode[];
  moreContentAvailable: boolean;
  providerName: string;
}

export interface HotelBooking {
  id: string;
  requestedCheckIn: string;
  requestedCheckOut: string;
  requestedRooms: HotelRoom[];
  specialRequests: string;
  locationPreferences: LocationPreferences;
  hotelBooker: Booker;
  stars: number;
  gym: boolean;
  pool: boolean;
  breakfast: boolean;
  requestedCurrency: string;
  requestedPrice: number;
  localTaxes: Price;
  bookingAction: BookingAction;
  bookingStatus: BookingStatus;
  type: BookingType;
  cancellationPolicies: CancellationPolicy[];
  hotelDescription: HotelDescription;
  paymentStatus: BookingPaymentStatus;
  prePaid: boolean;
  refundable: boolean;
  corporateRate: boolean;
  packageId?: string;
}

export class HotelBookingModel implements HotelBooking {
  constructor(
    public id: string,
    public requestedCheckIn: string,
    public requestedCheckOut: string,
    public requestedRooms: HotelRoomModel[],
    public specialRequests: string,
    public locationPreferences: LocationPreferences,
    public hotelBooker: Booker,
    public stars: number,
    public gym: boolean,
    public pool: boolean,
    public breakfast: boolean,
    public requestedCurrency: string,
    public requestedPrice: number,
    public localTaxes: Price,
    public bookingAction: BookingAction,
    public bookingStatus: BookingStatus,
    public type: BookingType,
    public cancellationPolicies: CancellationPolicy[],
    public hotelDescription: HotelDescription,
    public paymentStatus: BookingPaymentStatus,
    public prePaid: boolean,
    public refundable: boolean,
    public corporateRate: boolean,
    public packageId: string
  ) {}

  get totalNights(): number {
    return differenceInDays(new Date(this.requestedCheckOut), new Date(this.requestedCheckIn));
  }

  get totalGuests(): number {
    return this.requestedRooms.reduce((count, room) => {
      return count + room.occupants.length;
    }, 0);
  }

  get reservationCodes(): ReservationCode[] {
    return this.hotelDescription.reservationCodes;
  }

  get reservationId(): string {
    return this.reservationCodes?.find((code) => code.reservationType === ReservationType.ID)?.reservationCode;
  }

  get reservationPin(): string {
    return this.reservationCodes?.find((code) => code.reservationType === ReservationType.PIN)?.reservationCode;
  }
}

@Injectable({
  providedIn: 'root',
})
export class HotelBookingAdapter implements Adapter<HotelBooking> {
  adapt(item: HotelBooking): HotelBookingModel {
    return new HotelBookingModel(
      item?.id,
      item?.requestedCheckIn,
      item?.requestedCheckOut,
      (item?.requestedRooms || []).map((item) => new HotelRoomAdapter().adapt(item)),
      item?.specialRequests,
      item?.locationPreferences,
      item?.hotelBooker,
      item?.stars,
      item?.gym,
      item?.pool,
      item?.breakfast,
      item?.requestedCurrency,
      item?.requestedPrice,
      item?.localTaxes,
      item?.bookingAction,
      item?.bookingStatus,
      item?.type,
      item?.cancellationPolicies,
      item?.hotelDescription,
      item?.paymentStatus,
      item?.prePaid,
      item?.refundable,
      item?.corporateRate,
      item?.packageId
    );
  }
}
