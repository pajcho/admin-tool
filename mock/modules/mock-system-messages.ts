import { sub } from 'date-fns';
import * as Chance from 'chance';
import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import { SystemMessage, SystemMessageStatus } from '../../src/app/models/system-message.model';
import { createFullApiResponse, createSuccessResponse } from '../../src/app/global/interfaces/response.interface';
import { formatDibDate } from '../../src/app/utils/pipes/date.pipe';
import { PaginatedResponse } from '../../src/app/models/pagination.model';

function getMockSystemMessages(count = 10): SystemMessage[] {
  return [...Array.from({ length: count }).keys()].map(() => getMockSystemMessage());
}

function getMockSystemMessage(id: string = new Chance().hash({ length: 8, casing: 'upper' })): SystemMessage {
  // Set the seed value, so we can have consistent values based on the id
  const chance = new Chance(id);
  // Give preference to CLOSED messages and generate 3 times more of them
  const status = chance.weighted([SystemMessageStatus.OPENED, SystemMessageStatus.CLOSED], [1, 3]);
  const activatedAt = sub(new Date(), {
    months: chance.prime({ min: 3, max: 33 }),
    hours: chance.prime({ max: 23 }),
    minutes: chance.prime({ max: 59 }),
  });
  const closedAt = sub(new Date(), {
    months: chance.prime({ max: 2 }),
    hours: chance.prime({ max: 23 }),
    minutes: chance.prime({ max: 59 }),
  });

  return {
    id,
    description: chance.paragraph(),
    activatedAt: formatDibDate(activatedAt.toString(), 'server'),
    closedBy: status === SystemMessageStatus.CLOSED ? chance.name() : null,
    closedAt: status === SystemMessageStatus.CLOSED ? formatDibDate(closedAt.toString(), 'server') : null,
    status,
  };
}

const mockSystemMessages: MockRequest[] = [
  {
    method: 'GET',
    url: '/api/tmcc/system-messages?page={page}&size={size}',
    params: { page: '([0-9]+)', size: '([0-9]+)' },
    getResponse: ({ page, size }): PaginatedResponse<SystemMessage> => {
      return createFullApiResponse<SystemMessage>(getMockSystemMessages(+size), +page, +size, 80);
    },
  },
  {
    method: 'GET',
    url: '/api/tmcc/system-messages/{id}',
    getResponse: ({ id }): SystemMessage => ({ ...getMockSystemMessage(id) }),
  },
  {
    method: 'PATCH',
    url: '/api/tmcc/system-messages/{id}',
    getResponse: ({ id }, body): SystemMessage => ({
      ...body,
      id,
      // If we have just closed the message add the missing fields
      closedAt: body.status === SystemMessageStatus.CLOSED ? body.closedAt || new Date() : null,
      closedBy: body.status === SystemMessageStatus.CLOSED ? body.closedBy || new Chance().name() : null,
    }),
  },
  {
    method: 'POST',
    url: '/api/tmcc/system-messages',
    getResponse: (params, body): SystemMessage => ({ ...body, id: new Chance().hash({ length: 8, casing: 'upper' }) }),
  },
  {
    method: 'DELETE',
    url: '/api/tmcc/system-messages/{any}',
    getResponse: () => createSuccessResponse,
  },
];

export function getMockSystemMessageRequests(): MockRequest[] {
  return environment.mock.systemMessages ? mockSystemMessages : [];
}
