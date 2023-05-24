import * as Chance from 'chance';
import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import { User, UserType } from '../../src/app/models/user.model';
import { createFullApiResponse } from '../../src/app/global/interfaces/response.interface';
import { PaginatedResponse } from '../../src/app/models/pagination.model';

const chance = Chance.Chance();

function getMockUsers(count = 10): User[] {
  return [...Array.from({ length: count }).keys()].map(() => getMockUser());
}

function getMockUser(): User {
  return {
    id: chance.guid(),
    firstName: chance.first(),
    lastName: chance.last(),
    phone: chance.phone(),
    password: null,
    type: chance.pickone([
      // Increase a change of being an AGENT
      UserType.AGENT,
      UserType.AGENT,
      UserType.AGENT,
      UserType.AGENT,
      // With less change of being an ADMIN
      UserType.ADMIN,
      UserType.ADMIN,
      // And in some rare occasions show SUPER_ADMINs
      UserType.SUPER_ADMIN,
    ]),
    username: chance.email({ domain: 'example.com' }).toLowerCase(),
    disabled: chance.bool({ likelihood: 20 }),
  };
}

const mockUsers: MockRequest[] = [
  {
    method: 'GET',
    url: '/api/tmcc/users?page={page}&size={size}',
    params: { page: '([0-9]+)', size: '([0-9]+)' },
    getResponse: ({ page, size }): PaginatedResponse<User> => {
      return createFullApiResponse<User>(getMockUsers(+size), +page, +size, 80);
    },
  },
  {
    method: 'PUT',
    url: '/api/tmcc/users/{id}',
    getResponse: (params, body): User => ({ ...body, id: params.id }),
  },
  {
    method: 'POST',
    url: '/api/tmcc/users',
    getResponse: (params, body): User => ({ ...body, id: chance.guid() }),
  },
  {
    method: 'PUT',
    url: '/api/tmcc/users/{id}/change-password',
    getResponse: (params): User => ({ ...getMockUser(), id: params.id }),
  },
  {
    method: 'GET',
    url: '/api/tmcc/users-override?username={username}',
    getResponse: (): Partial<{ token: string }> => ({ token: chance.guid() }),
  },
];

export function getMockUserRequests(): MockRequest[] {
  return environment.mock.users ? mockUsers : [];
}
