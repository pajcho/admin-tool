import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import {
  CreditCardVendor,
  FlightPNRConfirmation,
  FlightPNRValidation,
  FlightPNRValidationState,
  FormOfPaymentType,
} from '../../src/app/models/pnr.model';
import { UserTitle } from '../../src/app/models/cart-items/shared.model';
import { mockCartData } from './data/mock-cart-data';

const mockPNR: MockRequest[] = [
  {
    method: 'POST',
    url: `${environment.api.dfs}/v1/tmcc/agent-assisted/validate-booking`,
    getResponse: (params, body): FlightPNRValidation => {
      const previewPNR = body.bookingReference.reference.endsWith('_preview');
      const updatePNR = body.bookingReference.reference.endsWith('_update');
      const existingPNR = updatePNR || previewPNR;
      const bookingReference = body.bookingReference.reference.replace('_update', '').replace('_preview', '');

      return {
        state: existingPNR ? FlightPNRValidationState.EXISTING : FlightPNRValidationState.NEW,
        bookingReference: {
          reference: bookingReference,
          source: body.bookingReference.source,
        },
        finalDestination: existingPNR ? 'ARN' : null,
        flights: [
          {
            ...mockCartData.flightBookings[0].flights[0],
            segments: [
              ...mockCartData.flightBookings[0].flights[0].segments,
              ...mockCartData.flightBookings[1].flights[0].segments,
            ],
          },
          // {
          //   segments: [
          //     {
          //       id: '1',
          //       cabinClass: CabinClass.ECONOMY,
          //       departure: {
          //         airportName: 'Arlanda',
          //         airportCode: 'ARN',
          //         airportCountryCode: 'SE',
          //         terminal: '2',
          //         time: '2021-06-18T20:55:00',
          //         flightTaxiOption: false, // Was missing
          //         // Geolocation is not needed
          //       },
          //       arrival: {
          //         airportName: 'Belgrade',
          //         airportCode: 'BEG',
          //         airportCountryCode: 'RS',
          //         terminal: null,
          //         time: '2021-06-18T23:00:00',
          //         flightTaxiOption: false, // Was missing
          //         // Geolocation is not needed
          //       },
          //       duration: 7500,
          //       marketingAirline: {
          //         code: 'KL',
          //         name: 'KLM',
          //         iconUrl: 'http://some.url',
          //       },
          //       marketingCarrier: 'KL',
          //       operatingAirline: {
          //         code: 'KL',
          //         name: 'KLM',
          //         iconUrl: 'http://some.url',
          //       },
          //       operatingCarrier: 'KL',
          //       flightNumber: 'KL 7444',
          //       baggageAllowance: {
          //         quantity: 1,
          //         weight: {
          //           unit: 'K',
          //           value: '23',
          //         },
          //       },
          //       layover: 7500,
          //       longLayover: false,
          //       aircraftModel: 'Airbus A320', // Was missing
          //       airportChange: false, // Was missing
          //       shortLayover: false, // Was missing
          //       differentDay: false, // Was missing
          //     },
          //   ],
          //   duration: 7500,
          //   co2EmissionInGrams: 200,
          // },
        ],
        travellers: [
          {
            externalId: '1',
            firstName: 'John',
            lastName: 'Doe',
            title: UserTitle.MR,
            email: existingPNR ? 'john.doe@example.com' : null,
          },
          {
            externalId: '2',
            firstName: 'Peter',
            lastName: 'Forest',
            title: UserTitle.MR,
            email: existingPNR ? 'peter@example.com' : null,
          },
          {
            externalId: '3',
            firstName: 'John',
            lastName: 'Doe',
            title: UserTitle.MR,
            email: existingPNR ? 'john.doe@example.com' : null,
          },
        ],
        currency: 'SEK',
        totalPrice: 668,
        totalPriceWithMarkup: 668,
        formOfPayment: {
          type: FormOfPaymentType.CREDIT_CARD,
          creditCard: {
            vendor: CreditCardVendor.DINERS,
            number: 'XXXXXXXXXXXX7710',
            expiry: '1228',
          },
        },
        updates: updatePNR
          ? [
              'Price updated',
              'Traveller John Doe removed',
              'New traveller John Doe added',
              'Baggage added for traveller John Doe',
              'Seat changed for traveller John Doe',
              'Departing flight date and time changed',
            ]
          : [],
        cartId: previewPNR ? 'ec9515a6-cd80-4bc8-ab7f-1bd260b58bf8' : undefined,
      };
    },
  },
  {
    method: 'POST',
    delay: 3000,
    url: `/api/tmcc/agent-assisted/confirmation`,
    getResponse: (): FlightPNRConfirmation => {
      return {
        cartId: 'ec9515a6-cd80-4bc8-ab7f-1bd260b58bf8',
      };
    },
  },
];

export function getMockPNRRequests(): MockRequest[] {
  return environment.mock.pnr ? mockPNR : [];
}
