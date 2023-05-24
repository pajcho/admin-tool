import { Injectable } from '@angular/core';
import { compareAsc } from 'date-fns';
import { Adapter } from './adapter';
import { TaxiBooking, TaxiBookingAdapter, TaxiBookingModel } from './cart-items/taxi-booking.model';
import { HotelBooking, HotelBookingAdapter, HotelBookingModel } from './cart-items/hotel-booking.model';
import { BookingStatus, bookingStatusMap, BookingUserType } from './booking.model';
import { TrainBooking, TrainBookingAdapter, TrainBookingModel } from './cart-items/train-booking.model';
import { GenericProduct, GenericProductAdapter, GenericProductModel } from './cart-items/generic-product-booking.model';
import { PaymentStatus } from './constants/payment-status.constants';
import { FlightBooking, FlightBookingAdapter, FlightBookingModel } from './cart-items/flight-booking.model';
import {
  RentalCarBooking,
  RentalCarBookingAdapter,
  RentalCarBookingModel,
} from './cart-items/rental-car-booking.model';

export interface Payment {
  orderId: string;
  paymentDate: string;
}

export interface PackageBooking {
  id: string;
  ownerId: string;
  flights: FlightBooking[];
  hotel: HotelBooking;
  requestedCurrency: string;
  requestedPrice: number;
  isRefundable: boolean;
  packageRate: boolean;
}

export interface OrderReferenceFields {
  bookerEmail?: string;
  bookerEmployeeNumber?: string;
  bookerName?: string;
  projectId?: string;
  projects?: string;
  purposeOfTrip?: string;
  purposeOfTripId?: string;
  yourReference?: string;
}

export type CartOrder = Partial<Cart> & { orderReferenceFields: OrderReferenceFields };

export interface Cart {
  id: string;
  customerId: string;
  travelReference: string;
  actionStates: string[]; // TODO: Extract type
  status: BookingStatus;
  tripId: string;
  tripName: string;
  additionalTripName: string;
  requestApprovalDueDate: string;
  cartApprovers: string[]; // TODO: Extract type
  startDate: string;
  endDate: string;
  price: Record<any, any>; // TODO: Extract type
  payments?: Payment[];
  paymentMethod: string; // TODO: Check with BE and create a type
  receiptAvailable: boolean;
  bids: string[];
  ibs: string[];
  packages: PackageBooking[];
  gps: HotelBooking[];
  gos: string[];
  tickets: string[];
  flightBookings: FlightBooking[];
  taxiBookings: TaxiBooking[];
  genericProducts: GenericProduct[];
  trainBookings: TrainBooking[];
  rentalCarBookings: RentalCarBooking[];
  labels: string[];
  outOfPolicyChecker: Record<any, any>;
  createdById: string;
  createdByType: string;
  createdAt: string;
  yourReference: string;
  currentOrder: CartOrder;
}

export class CartModel implements Cart {
  constructor(
    public id: string,
    public customerId: string,
    public travelReference: string,
    public actionStates: string[],
    public status: BookingStatus,
    public tripId: string,
    public tripName: string,
    public additionalTripName: string,
    public requestApprovalDueDate: string,
    public cartApprovers: string[],
    public startDate: string,
    public endDate: string,
    public price: Record<any, any>,
    public payments: Payment[],
    public paymentMethod: string,
    public receiptAvailable: boolean,
    public bids: string[],
    public ibs: string[],
    public packages: PackageBooking[],
    public gps: HotelBookingModel[],
    public gos: string[],
    public tickets: string[],
    public flightBookings: FlightBookingModel[],
    public taxiBookings: TaxiBookingModel[],
    public genericProducts: GenericProductModel[],
    public trainBookings: TrainBookingModel[],
    public rentalCarBookings: RentalCarBookingModel[],
    public labels: string[],
    public outOfPolicyChecker: Record<any, any>,
    public createdById: string,
    public createdByType: BookingUserType,
    public createdAt: string,
    public yourReference: string,
    public currentOrder: CartOrder
  ) {}

  get tripStatus(): string {
    return bookingStatusMap[this.status];
  }

  get cartPaymentStatus(): PaymentStatus {
    if (this.isCompletedByAgent) return PaymentStatus.COMPLETED_BY_AGENT;

    // TODO: Implement isDifferentPaymentTypeBookings handle here
    //  Reference: src/app/trip/components/cart-payment-section/cart-payment-section.component.ts
    //  Method: getCartPaymentStatus()

    return PaymentStatus[this.status];
  }

  get isCreatedByAgent(): boolean {
    return this.createdByType === BookingUserType.AGENT;
  }

  get isCompletedByAgent(): boolean {
    return this.isCreatedByAgent && this.status === PaymentStatus.COMPLETED;
  }

  get invoiceSentToAdmin(): boolean {
    return this.status === PaymentStatus.COMPLETED && this.paymentMethod === 'PERSONAL_CREDIT_CARD';
  }
}

@Injectable({
  providedIn: 'root',
})
export class CartAdapter implements Adapter<Cart> {
  adapt(item: Record<any, any>): CartModel {
    const flightBookingModels = this.adaptFlights(item);
    const trainBookingModels = this.adaptTrains(item);

    return new CartModel(
      item?.id,
      item?.customerId,
      item?.travelReference,
      item?.actionStates || [],
      item?.status,
      item?.tripId,
      item?.tripName,
      item?.additionalTripName,
      item?.requestApprovalDueDate,
      item?.cartApprovers || [],
      item?.startDate,
      item?.endDate,
      item?.price,
      item?.payments,
      item?.paymentMethod,
      item?.receiptAvailable,
      item?.bids,
      item?.ibs,
      item?.packages,
      this.adaptHotels(item),
      item?.gos,
      item?.tickets,
      flightBookingModels,
      this.adaptTaxis(item, [...flightBookingModels, ...trainBookingModels]),
      this.adaptGenericProducts(item),
      trainBookingModels,
      this.adaptRentalCars(item),
      item?.labels,
      item?.outOfPolicyChecker,
      item?.createdById,
      item?.createdByType,
      item?.createdAt,
      item?.yourReference,
      item?.currentOrder
    );
  }

  private adaptHotels(item: Record<any, any>): HotelBookingModel[] {
    const hotels = item?.gps || [];

    item.packages?.forEach((packageBooking) => {
      if (packageBooking.hotel) {
        hotels.push({
          ...packageBooking.hotel,
          requestedPrice: packageBooking.requestedPrice,
          packageId: packageBooking.id,
        });
      }
    });

    return hotels.map((item) => new HotelBookingAdapter().adapt(item));
  }

  private adaptRentalCars(item: Record<any, any>): RentalCarBookingModel[] {
    return (item?.rentalCarBookings || [])
      .map((item) => new RentalCarBookingAdapter().adapt(item))
      .sort((a: RentalCarBookingModel, b: RentalCarBookingModel) => {
        // BE can return rental cars in random order, so we need to make sure they are always sorted by date
        return compareAsc(new Date(a.pickup.dateAndTime), new Date(b.pickup.dateAndTime));
      });
  }

  private adaptTrains(item: Record<any, any>): TrainBookingModel[] {
    return (item?.trainBookings || [])
      .map((item) => new TrainBookingAdapter().adapt(item))
      .sort((a: TrainBookingModel, b: TrainBookingModel) => {
        // BE will return train journeys in random order, so we need to make sure they are always sorted by date
        return compareAsc(
          new Date(a.firstJourney.firstSegment.departureDateTime),
          new Date(b.firstJourney.firstSegment.departureDateTime)
        );
      });
  }

  private adaptGenericProducts(item: Record<any, any>): GenericProductModel[] {
    return (item?.genericProducts || []).map((item) => new GenericProductAdapter().adapt(item));
  }

  private adaptTaxis(
    item: Record<any, any>,
    bookingModels: (FlightBookingModel | TrainBookingModel)[]
  ): TaxiBookingModel[] {
    return (item?.taxiBookings || [])
      .map((item) => new TaxiBookingAdapter().adapt(item, bookingModels))
      .sort((a: TaxiBookingModel, b: TaxiBookingModel) => {
        // BE will return taxi journeys in random order, so we need to make sure they are always sorted by date
        return compareAsc(new Date(a.start.datetime), new Date(b.start.datetime));
      });
  }

  private adaptFlights(item: Record<any, any>): FlightBookingModel[] {
    const flights = item?.flightBookings || [];

    item.packages?.forEach((packageBooking) => {
      packageBooking.flights.forEach((flightBooking) => {
        flights.push({
          ...flightBooking,
          totalPrice: packageBooking.requestedPrice,
          packageId: packageBooking.id,
        });
      });
    });

    return flights
      .map((item) => new FlightBookingAdapter().adapt(item))
      .sort((a: FlightBookingModel, b: FlightBookingModel) => {
        // BE will return flights in random order, so we need to make sure they are always sorted by date
        return compareAsc(
          new Date(a.firstFlight.firstSegment.departure.time),
          new Date(b.firstFlight.firstSegment.departure.time)
        );
      });
  }
}
