import * as Chance from 'chance';
import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import {
  CompanyUser,
  CompanyUserRole,
  CompanyUserStatus,
  Gender,
  TravelDocumentType,
} from '../../src/app/models/company-user.model';
import { createFullApiResponse } from '../../src/app/global/interfaces/response.interface';
import { formatDibDate } from '../../src/app/utils/pipes/date.pipe';
import { PaginatedResponse } from '../../src/app/models/pagination.model';

function getMockCompanyUsers(count = 10): CompanyUser[] {
  return [...Array.from({ length: count }).keys()].map(() => getMockCompanyUser());
}

function getMockCompanyUser(id: string = new Chance().guid()): CompanyUser {
  // Set the seed value, so we can have consistent values based on the id
  const chance = new Chance(id);
  const currentYear = new Date().getFullYear();

  return {
    id,
    role: chance.pickone([CompanyUserRole.ADMIN, CompanyUserRole.TRAVELLER, CompanyUserRole.TRAVELLER]),
    active: chance.bool({ likelihood: 80 }),
    status: chance.pickone([
      CompanyUserStatus.ACCEPTED,
      CompanyUserStatus.INVITED,
      CompanyUserStatus.PENDING,
      CompanyUserStatus.EXPIRED,
    ]),
    birthDate: null,
    // Use last year as creation date for all users
    createdDate: formatDibDate(chance.date({ year: currentYear - chance.natural({ min: 1, max: 4 }) }), 'server'),
    username: chance.email({ domain: 'example.com' }).toLowerCase(),
    firstname: chance.first(),
    lastname: chance.last(),
    phone: chance.phone(),
    address: chance.address(),
    city: chance.city(),
    zipcode: chance.postal(),
    country: chance.country(),
    language: 'EN',
    currency: 'EUR',
    agentNote: null,
    companyId: chance.guid(),
    companyName: chance.company(),
    travelDocuments: [
      {
        id: chance.guid(),
        customerId: id,
        idNumber: chance.string({ length: chance.natural({ min: 6, max: 14 }), numeric: true }),
        issuingDate: formatDibDate(chance.date({ year: currentYear - chance.natural({ min: 1, max: 10 }) }), 'server'),
        expiryDate: formatDibDate(chance.date({ year: currentYear + chance.natural({ min: 1, max: 10 }) }), 'server'),
        firstName: chance.first(),
        lastName: chance.last(),
        type: chance.pickone([TravelDocumentType.ID_CARD, TravelDocumentType.PASSPORT]),
        dateOfBirth: formatDibDate(chance.birthday({ type: 'adult' }), 'server'),
        countryOfIssuance: chance.country(),
        gender: chance.pickone([Gender.FEMALE, Gender.MALE]),
        nationality: chance.country(),
        defaultDocument: true,
        completed: true,
      },
    ],
  };
}

const mockCompanyUsers: MockRequest[] = [
  {
    method: 'GET',
    url: '/api/tmcc/company-users?page={page}&size={size}',
    params: { page: '([0-9]+)', size: '([0-9]+)' },
    getResponse: ({ page, size }): PaginatedResponse<CompanyUser> => {
      return createFullApiResponse<CompanyUser>(getMockCompanyUsers(+size), +page, +size, 120);
    },
  },
  {
    method: 'POST',
    url: '/api/tmcc/company-users',
    getResponse: (params, body): CompanyUser => ({ ...body, id: new Chance().guid() }),
  },
  {
    method: 'GET',
    url: '/api/tmcc/company-users/{id}',
    getResponse: ({ id }): CompanyUser => ({ ...getMockCompanyUser(id) }),
  },
  {
    method: 'PUT',
    url: '/api/tmcc/company-users/{id}',
    getResponse: ({ id }, body): CompanyUser => ({ ...body, id }),
  },
];

export function getMockCompanyUserRequests(): MockRequest[] {
  return environment.mock.companyUsers ? mockCompanyUsers : [];
}
