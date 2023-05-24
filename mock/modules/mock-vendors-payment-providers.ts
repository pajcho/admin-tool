import * as Chance from 'chance';
import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import { VendorsPaymentProvider } from '../../src/app/models/vendors-payment-provider.model';
import { createFullApiResponse } from '../../src/app/global/interfaces/response.interface';
import { PaginatedResponse } from '../../src/app/models/pagination.model';

const chance = Chance.Chance();

function getMockVendorsPaymentProviders(count = 10): VendorsPaymentProvider[] {
  return [...Array.from({ length: count }).keys()].map(() => getMockVendorsPaymentProvider());
}

function getMockVendorsPaymentProvider(): VendorsPaymentProvider {
  return {
    id: chance.guid(),
    name: chance.company(),
    externalId: chance.string({ length: 8, numeric: true }),
    vendorIds: [chance.guid(), chance.guid()],
    active: chance.bool({ likelihood: 80 }),
  };
}

const mockVendorsPaymentProviders: MockRequest[] = [
  {
    method: 'GET',
    url: '/api/tmcc/products/vendors/payment-providers?page={page}&size={size}',
    params: { page: '([0-9]+)', size: '([0-9]+)' },
    getResponse: ({ page, size }): PaginatedResponse<VendorsPaymentProvider> => {
      return createFullApiResponse<VendorsPaymentProvider>(getMockVendorsPaymentProviders(+size), +page, +size, 15);
    },
  },
  {
    method: 'GET',
    url: '/api/tmcc/products/vendors/payment-providers?page={page}&size={size}&sort={sort}&active={active}&vendorId={vendorId}',
    params: { page: '([0-9]+)', size: '([0-9]+)' },
    getResponse: ({ page, size }): PaginatedResponse<VendorsPaymentProvider> => {
      // Agent assisted vendor payment providers filtered by product and vendor ids
      const providers = getMockVendorsPaymentProviders(+size).map((provider) => {
        provider.vendorPaymentPresentation = chance.pickone(['CASH', 'VCC', 'LODGE_CARD']);
        provider.name = `${provider.name} (${provider.vendorPaymentPresentation})`;

        return provider;
      });

      return createFullApiResponse<VendorsPaymentProvider>(providers, +page, +size, 15);
    },
  },
  {
    method: 'PUT',
    url: '/api/tmcc/products/vendors/payment-providers/{id}',
    getResponse: ({ id }, body): VendorsPaymentProvider => ({ ...body, id }),
  },
  {
    method: 'POST',
    url: '/api/tmcc/products/vendors/payment-providers',
    getResponse: (params, body): VendorsPaymentProvider => ({ ...body, id: chance.guid() }),
  },
];

export function getMockVendorsPaymentProviderRequests(): MockRequest[] {
  return environment.mock.vendorsPaymentProvider ? mockVendorsPaymentProviders : [];
}
