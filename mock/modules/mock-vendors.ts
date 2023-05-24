import * as Chance from 'chance';
import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import { Vendor } from '../../src/app/models/vendor.model';
import { createFullApiResponse } from '../../src/app/global/interfaces/response.interface';
import { PaginatedResponse } from '../../src/app/models/pagination.model';

const chance = Chance.Chance();

function getMockVendors(count = 10): Vendor[] {
  return [...Array.from({ length: count }).keys()].map(() => getMockVendor());
}

function getMockVendor(): Vendor {
  return {
    id: chance.guid(),
    externalId: chance.string({ length: 8, numeric: true }),
    name: chance.company(),
    productIds: [chance.guid(), chance.guid()],
    active: chance.bool({ likelihood: 80 }),
  };
}

const mockVendors: MockRequest[] = [
  {
    method: 'GET',
    url: '/api/tmcc/products/vendors?page={page}&size={size}',
    params: { page: '([0-9]+)', size: '([0-9]+)' },
    getResponse: ({ page, size }): PaginatedResponse<Vendor> => {
      return createFullApiResponse<Vendor>(getMockVendors(+size), +page, +size, 80);
    },
  },
  {
    method: 'GET',
    url: '/api/tmcc/products/vendors?page={page}&size={size}&productId={productId}',
    params: { page: '([0-9]+)', size: '([0-9]+)' },
    getResponse: ({ page, size }): PaginatedResponse<Vendor> => {
      // Agent assisted vendors filtered by product id
      const vendors = getMockVendors(+size).map((vendor) => {
        vendor.vendorName = chance.pickone(['Amadeus', 'LufthansaGroup', 'TravelPort']);

        return vendor;
      });

      return createFullApiResponse<Vendor>(vendors, +page, +size, 80);
    },
  },
  {
    method: 'POST',
    url: '/api/tmcc/products/vendors',
    getResponse: (params, body): Vendor => ({ ...body, id: chance.guid() }),
  },
  {
    method: 'PUT',
    url: '/api/tmcc/products/vendors/{id}',
    getResponse: ({ id }, body): Vendor => ({ ...body, id }),
  },
  {
    method: 'DELETE',
    url: '/api/tmcc/products/vendors/{any}',
    getResponse: (): void => {},
  },
];

export function getMockVendorRequests(): MockRequest[] {
  return environment.mock.vendors ? mockVendors : [];
}
