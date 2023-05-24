import * as Chance from 'chance';
import { environment } from '../../src/environments/environment';
import { User, UserType } from '../../src/app/models/user.model';
import { ForgotPasswordResponse, ValidatePasswordTokenResponse } from '../../src/app/reducers/common.interfaces';
import { MockRequest } from '../mock-request.model';

const chance = Chance.Chance();

const fakeToken = [
  'eyJhbGciOiJIUzUxMiJ9.eyJST0xFX0FHRU5UIjp0cnVlLCJ0bWNjX2lkIjoiVE1DX0',
  'NPTlNPTEUiLCJleHAiOjE2MTY1OTg2NDEsInVzZXJJZCI6ImIxZjZhYjhhLTQ1NGQtND',
  'JjYS04MjA5LWNmYjNkZGRkN2M3OCIsImlhdCI6MTYxNDE3OTQ0MSwidXNlcm5hbWUiOiJh',
  'ZG1pbkBkaWJob3RlbC5zZSJ9.0LN4i5aAnBfFubiPlgxIP1CUMwOHgBAseAxNui7YTEWQ',
  'IAJunvXrZXsBMldE5sHZ9542I972UN6_nMseHt3iUA',
].join('');

function getMockUser(): User {
  return {
    id: chance.guid(),
    firstName: chance.first(),
    lastName: chance.last(),
    phone: chance.phone(),
    password: null,
    type: UserType.SUPER_ADMIN,
    username: chance.email({ domain: 'example.com' }).toLowerCase(),
    disabled: chance.bool({ likelihood: 20 }),
  };
}

const mockAuth: MockRequest[] = [
  {
    method: 'POST',
    url: '/api/tmcc/authenticate',
    getResponse: (params, body): User => {
      return {
        ...getMockUser(),
        token: fakeToken,
        username: body.username,
      };
    },
  },
  {
    method: 'POST',
    url: '/api/tmcc/users/forgot-password',
    getResponse: (params, body): ForgotPasswordResponse => {
      return body;
    },
  },
  {
    method: 'GET',
    url: '/api/tmcc/users/activate-new-password/{token}',
    getResponse: (): ValidatePasswordTokenResponse => {
      return { valid: true };
    },
  },
  {
    method: 'POST',
    url: '/api/tmcc/users/activate-new-password',
    getResponse: (params, body): User => {
      return body;
    },
  },
  {
    method: 'GET',
    url: '/api/tmcc/users/set-new-password/{token}',
    getResponse: (): ValidatePasswordTokenResponse => {
      return { valid: true };
    },
  },
  {
    method: 'POST',
    url: '/api/tmcc/users/set-new-password',
    getResponse: (params, body): User => {
      return body;
    },
  },
];

export function getMockAuthRequests(): MockRequest[] {
  return environment.mock.auth ? mockAuth : [];
}
