import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import { Product } from '../../src/app/models/product.model';
import { createFullApiResponse } from '../../src/app/global/interfaces/response.interface';
import { PaginatedResponse } from '../../src/app/models/pagination.model';

// eslint-disable-next-line unicorn/prefer-module
const chance = require('chance').Chance();

function getMockProducts(count = 10): Product[] {
  return [...Array.from({ length: count }).keys()].map(() => getMockProduct());
}

function getMockProduct(): Product {
  return {
    id: chance.guid(),
    name: chance.company(),
    base: chance.bool({ likelihood: 10 }),
    active: chance.bool({ likelihood: 80 }),
  };
}

const mockProducts: MockRequest[] = [
  {
    method: 'GET',
    url: '/api/tmcc/products?page={page}&size={size}',
    params: { page: '([0-9]+)', size: '([0-9]+)' },
    getResponse: ({ page, size }): PaginatedResponse<Product> => {
      return createFullApiResponse<Product>(getMockProducts(+size), +page, +size, 15);
    },
  },
  {
    method: 'PUT',
    url: '/api/tmcc/products/{id}',
    getResponse: ({ id }, body): Product => ({ ...body, id }),
  },
  {
    method: 'POST',
    url: '/api/tmcc/products',
    getResponse: (params, body): Product => ({ ...body, id: chance.guid() }),
  },
];

export function getMockProductRequests(): MockRequest[] {
  return environment.mock.products ? mockProducts : [];
}
