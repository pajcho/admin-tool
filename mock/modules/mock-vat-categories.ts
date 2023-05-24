import * as Chance from 'chance';
import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import { VatCategory } from '../../src/app/models/vat-category.model';
import { createFullApiResponse } from '../../src/app/global/interfaces/response.interface';
import { PaginatedResponse } from '../../src/app/models/pagination.model';

const chance = Chance.Chance();

function getMockVatCategories(count = 10): VatCategory[] {
  return [...Array.from({ length: count }).keys()].map(() => getMockVatCategory());
}

function getMockVatCategory(): VatCategory {
  // 75% Sweden and 25% Serbia
  const randomCountry = chance.pickone([
    { code: 'SE', name: 'Sweden' },
    { code: 'SE', name: 'Sweden' },
    { code: 'SE', name: 'Sweden' },
    { code: 'RS', name: 'Serbia' },
  ]);

  return {
    id: chance.guid(),
    name: chance.company(),
    productId: chance.guid(),
    productName: chance.company(),
    countryId: randomCountry.code,
    active: chance.bool({ likelihood: 80 }),
    externalId: chance.string({ length: 8, casing: 'upper', alpha: true, numeric: true }),
    vatPercentage: chance.pickone([5, 10, 15, 20, 25]),
  };
}

const mockVatCategories: MockRequest[] = [
  {
    method: 'GET',
    url: '/api/tmcc/products/vat-categories?page={page}&size={size}',
    params: { page: '([0-9]+)', size: '([0-9]+)' },
    getResponse: ({ page, size }): PaginatedResponse<VatCategory> => {
      return createFullApiResponse<VatCategory>(getMockVatCategories(+size), +page, +size, 80);
    },
  },
  {
    method: 'PUT',
    url: '/api/tmcc/products/vat-categories/{id}',
    getResponse: ({ id }, body) => ({ ...body, id }),
  },
  {
    method: 'POST',
    url: '/api/tmcc/products/vat-categories',
    getResponse: (params, body) => ({ ...body, id: chance.guid() }),
  },
];

export function getMockVatCategoryRequests(): MockRequest[] {
  return environment.mock.vatCategories ? mockVatCategories : [];
}
