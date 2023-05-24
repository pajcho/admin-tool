import * as Chance from 'chance';
import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import { Cart } from '../../src/app/models/cart.model';
import { mockCartData } from './data/mock-cart-data';

function getMockCart(id: string = new Chance().guid()): Cart {
  // Set the seed value, so we can have consistent values based on the id
  const chance = new Chance(id);

  return { ...mockCartData, id };
}

const mockCarts: MockRequest[] = [
  {
    method: 'GET',
    url: '/api/tmcc/carts/{id}',
    getResponse: ({ id }): Cart => ({ ...getMockCart(id) }),
  },
];

export function getMockCartRequests(): MockRequest[] {
  return environment.mock.carts ? mockCarts : [];
}
