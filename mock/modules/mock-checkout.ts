import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import { BookingChannelsResponse, CheckoutOptionsResponse } from '../../src/app/models/checkout-options.model';
import { PaymentType } from '../../src/app/models/payment.model';

const mockCheckout: MockRequest[] = [
  {
    method: 'GET',
    url: `${environment.api.ams}/api/reference-fields/{companyId}/checkout-options`,
    getResponse: (): CheckoutOptionsResponse => {
      return {
        paymentOptions: [
          { name: PaymentType.LODGE_CARD, selected: true },
          { name: PaymentType.BILLING_PROFILE, selected: true },
          { name: PaymentType.CREDIT_CARD, selected: true },
        ],
        project: {
          mandatory: true,
          label: 'Custom Project Label',
          items: [
            {
              description: 'Project #1 description',
              id: '9bcbfb33-5d4f-4cd6-8903-95bd2a50d202',
              name: 'Project #1',
              type: 'projects',
            },
            {
              description: 'Project #2 description',
              id: '51e62ac0-fb5a-41ff-8a1b-5c98c468754a',
              name: 'Project #2',
              type: 'projects',
            },
          ],
        },
        purposeOfTrip: {
          mandatory: true,
          label: null,
          items: [
            {
              description: 'Purpose of trip description',
              id: '9bcbfb33-5d4f-4cd6-8903-95bd2a50d202',
              name: 'Purpose of trip',
              type: 'purposeOfTrip',
            },
            {
              description: 'Purpose of trip #2 description',
              id: '51e62ac0-fb5a-41ff-8a1b-5c98c468754a',
              name: 'Purpose of trip #2',
              type: 'purposeOfTrip',
            },
          ],
        },
        yourReference: {
          mandatory: true,
          label: null,
        },
      };
    },
  },
  {
    method: 'GET',
    url: `${environment.api.ams}/api/information-fields/get-booking-channels`,
    getResponse: (): BookingChannelsResponse => {
      return ['Online', 'Offline - working hours', 'Offline - non working hours'];
    },
  },
];

export function getMockCheckoutRequests(): MockRequest[] {
  return environment.mock.checkout ? mockCheckout : [];
}
