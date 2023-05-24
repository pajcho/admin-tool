import * as Chance from 'chance';
import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import { BillingRequest, BillingRequestStatus } from '../../src/app/models/billing-request.model';
import { createFullApiResponse } from '../../src/app/global/interfaces/response.interface';

const chance = Chance.Chance();

function getMockBillingRequests(count = 10): BillingRequest[] {
  return [...Array.from({ length: count }).keys()].map(() => getMockBillingRequest());
}

function getMockBillingRequest(): BillingRequest {
  return {
    id: chance.guid(),
    active: true,
    billingProfileRequestStatus: BillingRequestStatus.PENDING,
    corporationName: chance.company(),
    hasCorporateRate: false,
    stripeCustomerId: chance.guid(),
  };
}

const mockBillingRequests: MockRequest[] = [
  {
    method: 'GET',
    url: '/api/tmcc/corporations/billing-profiles/requests?page={page}&size={size}',
    params: { page: '([0-9]+)', size: '([0-9]+)' },
    getResponse: ({ page, size }) => {
      return createFullApiResponse(getMockBillingRequests(+size), +page, +size, 300);
    },
  },
  {
    method: 'PUT',
    url: '/api/tmcc/corporations/billing-profiles/requests/{id}',
    getResponse: ({ id }, body) => ({ ...body, id }),
  },
];

export function getMockBillingRequestRequests(): MockRequest[] {
  return environment.mock.billingRequests ? mockBillingRequests : [];
}
