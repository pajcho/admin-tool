import { Injectable } from '@angular/core';
import { compareAsc } from 'date-fns';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Adapter } from './adapter';
import { BookingReference } from './cart-items/flight-booking.model';
import { Flight, FlightAdapter, FlightDestination, FlightModel } from './cart-items/flight.model';
import { UserTitle } from './cart-items/shared.model';
import { PaymentType } from './payment.model';
import { CostCenter } from './cost-center.model';
import { BillingProfile } from './billing-profile.model';
import { LodgeCard } from './lodge-card.model';
import { VendorPaymentPresentation, VendorsPaymentProvider } from './vendors-payment-provider.model';
import { BookingChannelModel, ReferenceFieldItem } from './checkout-options.model';

// Flight PNR Confirmation
export interface FlightPNRConfirmationRequest {
  tripName: string;
  bookingReference: BookingReference;
  bookerId: string;
  finalDestination: string;
  travellers: {
    id: string;
    externalId: string;
    costCenterId: string;
    phone: string;
    email: string;
  }[];
  paymentInfo: {
    // TODO: vendorPaymentPresentation should not be needed, but since backend can not get paymentProvider simply
    //  by it's ID, this was a quick workaround. Check with Vlada P. about a potential refactor in the future.
    vendorPaymentPresentation: string;
    vendorPaymentProviderId: string;
    vendorPaymentId: string;
    customerPaymentType: PaymentType;
    customerPaymentId: string;
    sellPrice: number;
    exchangePenalty: number;
    residualValue: number;
  };
  referenceFields: {
    projectId: string;
    projectName: string;
    purposeOfTripId: string;
    purposeOfTripName: string;
    yourReference: string;
  };
  agentFee: string;
  agentNote: string;
}

export interface FlightPNRConfirmationForm {
  travellers: FormArray<
    FormGroup<{
      id: FormControl<string>;
      externalId: FormControl<string>;
      costCenter: FormControl<CostCenter>;
      phone: FormControl<string>;
      email: FormControl<string>;
    }>
  >;
  vendorsPaymentProvider: FormControl<VendorsPaymentProvider>;
  vendorsLodgeCard?: FormControl<LodgeCard>;
  referenceId?: FormControl<string>;
  salesModel: FormControl<string>;
  purchasePrice?: FormControl<number>;
  sellPrice: FormControl<number>;
  residualValue?: FormControl<number>;
  exchangePenalty?: FormControl<number>;
  paymentMethod: FormControl<string>;
  billingProfile?: FormControl<BillingProfile>;
  lodgeCard?: FormControl<LodgeCard>;
  project: FormControl<ReferenceFieldItem>;
  purposeOfTrip: FormControl<ReferenceFieldItem>;
  yourReference: FormControl<string>;
  agentFee: FormControl<BookingChannelModel>;
  note: FormControl<string>;
}

export interface FlightPNRConfirmation {
  cartId: string;
}

// Flight PNR Validation
export interface FlightPNRValidationRequest {
  bookingReference: {
    reference: string;
    source: string;
  };
  bookerId: string;
}

export enum FlightPNRValidationState {
  NEW = 'NEW',
  EXISTING = 'EXISTING',
  CANCELED = 'CANCELED',
}

export interface PNRValidationTraveler {
  externalId: string;
  title: UserTitle;
  firstName: string;
  lastName: string;
  email?: string; // Optional and only available for existing PNRs
}

export enum FormOfPaymentType {
  CASH = 'Cash',
  CREDIT_CARD = 'CreditCard',
}

export enum CreditCardVendor {
  DINERS = 'Diners',
  MASTERCARD = 'Mastercard',
}

export interface FormOfPaymentCache {
  type: FormOfPaymentType.CASH;
}

export interface FormOfPaymentCreditCard {
  type: FormOfPaymentType.CREDIT_CARD;
  creditCard: {
    vendor: CreditCardVendor;
    number: string;
    expiry: string;
  };
}

export type FormOfPayment = FormOfPaymentCache | FormOfPaymentCreditCard;

export interface FlightPNRValidation {
  totalPrice: number;
  totalPriceWithMarkup: number;
  currency: string;
  flights: Flight[];
  travellers: PNRValidationTraveler[];
  bookingReference: BookingReference;
  state: FlightPNRValidationState;
  updates: string[];
  formOfPayment?: FormOfPayment;
  finalDestination?: string;
  cartId?: string;
}

export class FlightPNRValidationModel implements FlightPNRValidation {
  constructor(
    public totalPrice: number,
    public totalPriceWithMarkup: number,
    public currency: string,
    public flights: FlightModel[],
    public travellers: PNRValidationTraveler[],
    public bookingReference: BookingReference,
    public state: FlightPNRValidationState,
    public updates: string[],
    public formOfPayment?: FormOfPayment,
    public finalDestination?: string,
    public cartId?: string
  ) {}

  get firstFlight(): FlightModel {
    return this.flights[0];
  }

  get lastFlight(): FlightModel {
    return this.flights[this.flights.length - 1];
  }

  get valid(): boolean {
    return !!this.bookingReference?.reference;
  }

  get isReturnFlight(): boolean {
    return this.firstFlight.firstSegment.departure.airportCode === this.lastFlight.lastSegment.arrival.airportCode;
  }

  get flightDetailsTitle() {
    if (this.isReturnFlight) {
      return `Round trip to ${this.flightDestination?.airportName} (${this.flightDestination?.airportCode})`;
    }

    const from = this.firstFlight.firstSegment.departure;
    const to = this.lastFlight.lastSegment.arrival;

    return `${from.airportName} (${from.airportCode}) - ${to.airportName} (${to.airportCode})`;
  }

  get flightDestination(): FlightDestination | null {
    if (!this.flights.length) return null;

    // First we check number of segments - 2 flight segments means we have a return flight already
    if (this.flights.length === 2) return this.firstFlight.lastSegment.arrival;

    // Next we rule-out one way flights
    if (!this.isReturnFlight) return this.firstFlight.lastSegment.arrival;

    // If segments are symmetrical we can possibly auto-determine flight destination
    // We determine that by getting all the arrival|departure airport code combinations and checking if every one of
    // them is doubled. We only keep unique values and the count should be equal to number of segments
    const isSymmetrical =
      this.firstFlight.segments.reduce((codes, segment) => {
        // To check this we create all possible combinations by mixing departure and arrival
        // and squash them by removing duplicates. For example:
        // If we have a flight from ARN -> MMX and return flight from MMX -> ARN
        // It will give us these 4 options: ARN|MMX, MMX|ARN and return flight MMX|ARN, ARN|MMX
        // When squashed we will get only 2 combos ARN|MMX, MMX|ARN meaning that the flight is symmetric
        codes.add([segment.departure.airportCode, segment.arrival.airportCode].join('|'));
        codes.add([segment.arrival.airportCode, segment.departure.airportCode].join('|'));

        return codes;
      }, new Set()).size === this.firstFlight.segments.length;

    if (this.firstFlight.segments.length % 2 === 0 && isSymmetrical) {
      // In this case final destination is located exactly on the middle segment's arrival
      return this.firstFlight.segments[this.firstFlight.segments.length / 2 - 1].arrival;
    }

    // If we can't determine the flight destination, lets check if we have final destination airport code set
    if (this.finalDestination) {
      // And if we do, we can search through middle segments to find the destination airport code
      return this.firstFlight.midSegments.find((segment) => {
        return segment.arrival.airportCode === this.finalDestination;
      })?.arrival;
    }

    // Otherwise we can not determine the flight destination and agent will have to do that manually
    return null;
  }

  get isNew(): boolean {
    return this.state === FlightPNRValidationState.NEW;
  }

  get isPreview(): boolean {
    return this.state === FlightPNRValidationState.EXISTING && !this.hasUpdates;
  }

  get hasUpdates(): boolean {
    return !!this.updates?.length;
  }

  get vendorType(): VendorPaymentPresentation[] {
    if (!this.formOfPayment)
      return [VendorPaymentPresentation.CASH, VendorPaymentPresentation.VCC, VendorPaymentPresentation.LODGE_CARD];

    // If form of payment is cash, vendor type must be cash as well
    if (this.formOfPayment?.type === FormOfPaymentType.CASH) return [VendorPaymentPresentation.CASH];

    // Credit Card
    return [VendorPaymentPresentation.VCC, VendorPaymentPresentation.LODGE_CARD];
  }
}

@Injectable({ providedIn: 'root' })
export class FlightPNRValidationAdapter implements Adapter<FlightPNRValidation> {
  adapt(item: FlightPNRValidation): FlightPNRValidationModel {
    return new FlightPNRValidationModel(
      item?.totalPrice,
      item?.totalPriceWithMarkup,
      item?.currency,
      (item?.flights || [])
        .map((item) => new FlightAdapter().adapt(item))
        .sort((a: FlightModel, b: FlightModel) => {
          // BE can return flights in random order, so we need to make sure they are always sorted by date
          return compareAsc(new Date(a.firstSegment.departure.time), new Date(b.firstSegment.departure.time));
        }),
      item?.travellers || [],
      item?.bookingReference,
      item?.state,
      item?.updates,
      item?.formOfPayment,
      item?.finalDestination,
      item?.cartId
    );
  }
}
