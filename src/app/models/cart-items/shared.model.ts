export enum UserTitle {
  MR = 'MR',
  MRS = 'MRS',
  MS = 'MS',
}

export enum TravelerType {
  ADULT = 'ADULT',
  CHILD = 'CHILD',
  INFANT = 'INFANT',
}

export enum CabinClass {
  ECONOMY = 'ECONOMY',
  PREMIUM = 'PREMIUM_ECONOMY',
  BUSINESS = 'BUSINESS',
  FIRST = 'FIRST',
}

export interface User {
  firstName: string;
  lastName: string;
  email?: string;
}

export interface Booker extends User {
  phoneNumber: string;
  companyName?: string;
}

export interface Traveler extends User {
  id?: string;
  phoneNumber?: string;
  travelerReferenceFields: TravelerReferenceFields;
}

export type TravelerReferenceFields = {
  costCenter2Name?: string;
  costCenterId?: string;
  costCenterName?: string;
  customerReference?: string;
  organizationLevel1?: string;
  organizationLevel2?: string;
  organizationLevel3?: string;
  organizationLevel4?: string;
  requisitionNumber?: string;
  travelerEmail?: string;
  travelerEmployeeNumber?: string;
  travelerName?: string;
};

export interface LocationPreferences {
  cityName: string;
  hotelAddress: string;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Airline {
  code: string;
  name: string;
  iconUrl: string;
}

export interface BaggageAllowance {
  quantity: number;
  weight: {
    value: string;
    unit: string;
  };
}

export interface ClimateCompensation {
  totalCO2Weight: number;
  weightUnit: string;
}

export interface Layover {
  duration: number;
  location: string;
}

export interface CancellationPolicy {
  costAmount: number;
  refundAmount: number;
  refundAmountPerNight: number;
  currency: string;
  fromDate: string;
  toDate: string;
  used: boolean;
  fullRefundable: boolean;
  cancellationFeeDetails: CancellationFeeDetails;
}

export interface CancellationFeeDetails {
  amount: number;
  currency: string;
  percent: number;
  numberOfNights: number;
}
