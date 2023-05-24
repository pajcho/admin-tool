import * as Chance from 'chance';
import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import { Employee } from '../../src/app/models/employee.model';
import { UserTitle } from '../../src/app/models/cart-items/shared.model';
import { PNRValidationTraveler } from '../../src/app/models/pnr.model';

function getMockEmployees(travellers: PNRValidationTraveler[]): Employee[] {
  return [...Array.from({ length: travellers.length }).keys()].map((index) =>
    // All even positioned travellers will be marked as guests
    getMockEmployee(travellers[index], (index + 1) % 2 === 0)
  );
}

function getMockEmployee(traveller: PNRValidationTraveler, isGuest = false): Employee {
  // Set the seed value, so we can have consistent values based on the id
  const id = new Chance().guid();
  const chance = new Chance(id);

  return {
    id: isGuest ? null : id,
    email: isGuest ? null : chance.email({ domain: 'example.com' }).toLowerCase(),
    userType: 'CUSTOMER',
    firstName: traveller.firstName || chance.first(),
    lastName: traveller.lastName || chance.last(),
    cellphone: chance.phone(),
    address1: chance.address(),
    address2: null,
    zipCode: chance.postal(),
    city: chance.city(),
    country: chance.country(),
    stripeCustomerId: null,
    customerType: null,
    companyName: chance.company(),
    userTitle: traveller.title || chance.pickone([UserTitle.MR, UserTitle.MS, UserTitle.MRS]),
    allowAgentOverride: chance.bool({ likelihood: 80 }),
    externalId: traveller.externalId,
  };
}

const mockEmployees: MockRequest[] = [
  {
    method: 'POST',
    url: '/api/tmcc/corporations/{companyId}/resolve-employees',
    delay: 0,
    getResponse: ({ companyId }, travellers: PNRValidationTraveler[]): Employee[] => {
      return [...getMockEmployees(travellers), getMockEmployee(travellers[0]), getMockEmployee(travellers[0])];
    },
  },
];

export function getMockEmployeesRequests(): MockRequest[] {
  return environment.mock.employees ? mockEmployees : [];
}
