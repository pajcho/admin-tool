import * as Chance from 'chance';
import { environment } from '../../src/environments/environment';
import { MockRequest } from '../mock-request.model';
import { Booking, BookingReferenceTypes } from '../../src/app/models/booking.model';
import { createFullApiResponse } from '../../src/app/global/interfaces/response.interface';
import { formatDibDate } from '../../src/app/utils/pipes/date.pipe';
import { BookingListItem } from '../../src/app/models/booking-list-item.model';
import { PaginatedResponse } from '../../src/app/models/pagination.model';

function getMockBookingListItems(count = 10): BookingListItem[] {
  return [...Array.from({ length: count }).keys()].map(() => getMockBookingListItem());
}

function getMockBookingListItem(id: string = new Chance().guid()): BookingListItem {
  // Set the seed value, so we can have consistent values based on the id
  const chance = new Chance(id);
  const currentYear = new Date().getFullYear();

  return {
    cartId: id,
    tripId: chance.string({ length: 8, casing: 'upper', numeric: true, alpha: true }),
    status: chance.pickone(['COMPLETED']),
    companyName: chance.company(),
    travelers: [chance.name(), chance.name(), chance.name()],
    bookerName: chance.name(),
    startDate: formatDibDate(chance.date({ year: currentYear - chance.natural({ min: 1, max: 4 }) }), 'server'),
    endDate: formatDibDate(chance.date({ year: currentYear }), 'server'),
    price: null,
  };
}

function getMockBookingItem(id: string = new Chance().guid()): Booking {
  // Set the seed value, so we can have consistent values based on the id
  const chance = new Chance(id);
  const currentYear = new Date().getFullYear();

  return {
    cartId: id,
    tripId: chance.string({ length: 8, casing: 'upper', numeric: true, alpha: true }),
    tripName: chance.company(),
    status: chance.pickone(['COMPLETED']),
    company: {
      id: chance.guid(),
      name: chance.company(),
    },
    travelers: [
      {
        id: chance.guid(),
        name: chance.name(),
        username: chance.email({ domain: 'example.com' }).toLowerCase(),
      },
      {
        id: chance.guid(),
        name: chance.name(),
        username: chance.email({ domain: 'example.com' }).toLowerCase(),
      },
      {
        id: chance.guid(),
        name: chance.name(),
        username: chance.email({ domain: 'example.com' }).toLowerCase(),
      },
    ],
    booker: {
      id: chance.guid(),
      name: chance.name(),
      username: chance.email({ domain: 'example.com' }).toLowerCase(),
    },
    productTypes: Object.values(BookingReferenceTypes),
    numberOfItems: 4,
    startDate: formatDibDate(chance.date({ year: currentYear - chance.natural({ min: 1, max: 4 }) }), 'server'),
    endDate: formatDibDate(chance.date({ year: currentYear }), 'server'),
    agentNote: 'Some agent note!!',
  };
}

const mockBookings: MockRequest[] = [
  {
    method: 'GET',
    url: '/api/tmcc/bookings?page={page}&size={size}',
    params: { page: '([0-9]+)', size: '([0-9]+)' },
    getResponse: ({ page, size }): PaginatedResponse<BookingListItem> => {
      return createFullApiResponse<BookingListItem>(getMockBookingListItems(+size), +page, +size, 120);
    },
  },
  {
    method: 'POST',
    url: '/api/tmcc/bookings',
    getResponse: (params, body): BookingListItem => ({ ...body, id: new Chance().guid() }),
  },
  {
    method: 'GET',
    url: '/api/tmcc/bookings/{id}',
    getResponse: ({ id }): Booking => ({ ...getMockBookingItem(id) }),
  },
  {
    method: 'PATCH',
    url: '/api/tmcc/bookings/update-agent-note/{id}',
    getResponse: ({ id }, body): Booking => ({ ...body, id }),
  },
  {
    method: 'GET',
    url: '/api/tmcc/bookings/reference-types',
    getResponse: (): string[] => Object.values(BookingReferenceTypes),
  },
];

export function getMockBookingRequests(): MockRequest[] {
  return environment.mock.bookings ? mockBookings : [];
}
