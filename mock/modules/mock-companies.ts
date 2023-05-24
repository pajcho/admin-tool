import * as Chance from 'chance';
import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import { Company, CompanyStatus, SubscriptionStatus } from '../../src/app/models/company.model';
import { createFullApiResponse, createSuccessResponse } from '../../src/app/global/interfaces/response.interface';
import { formatDibDate } from '../../src/app/utils/pipes/date.pipe';

function getMockCompanies(count = 10): Company[] {
  return [...Array.from({ length: count }).keys()].map(() => getMockCompany());
}

function getMockCompany(id: string = new Chance().guid()): Company {
  // Set the seed value, so we can have consistent values based on the id
  const chance = new Chance(id);
  return {
    id,
    corporationName: chance.company(),
    registrationNumber: chance.string({ length: 8, casing: 'upper', alpha: true, numeric: true }),
    // Use last year as creation date for all companies
    activatedAt: formatDibDate(chance.date({ year: new Date().getFullYear() - 1 }), 'server'),
    agentNote: null,
    status: chance.pickone([CompanyStatus.NONE, CompanyStatus.AT_RISK, CompanyStatus.VIP]),
    subscriptionStatus: chance.pickone([
      SubscriptionStatus.ACTIVE,
      SubscriptionStatus.ACTIVE,
      SubscriptionStatus.DISABLED,
    ]),
  };
}

const mockCompanies: MockRequest[] = [
  {
    method: 'GET',
    url: '/api/tmcc/companies?page={page}&size={size}',
    params: { page: '([0-9]+)', size: '([0-9]+)' },
    getResponse: ({ page, size }) => {
      return createFullApiResponse(getMockCompanies(+size), +page, +size, 120);
    },
  },
  {
    method: 'POST',
    url: '/api/tmcc/companies',
    getResponse: (params, body) => ({
      ...body,
      id: new Chance().guid(),
      activatedAt: formatDibDate(new Date().toISOString(), 'server'),
    }),
  },
  {
    method: 'GET',
    url: '/api/tmcc/companies/{id}',
    getResponse: ({ id }) => ({ ...getMockCompany(id) }),
  },
  {
    method: 'PUT',
    url: '/api/tmcc/companies/{id}',
    getResponse: ({ id }, body) => ({ id, ...body }),
  },
  {
    method: 'DELETE',
    url: '/api/tmcc/companies/{any}',
    getResponse: () => createSuccessResponse,
  },
  {
    method: 'PATCH',
    url: '/api/tmcc/companies/{id}/{action}',
    getResponse: ({ id }) => ({ ...getMockCompany(id) }),
  },
];

export function getMockCompanyRequests(): MockRequest[] {
  return environment.mock.companies ? mockCompanies : [];
}
