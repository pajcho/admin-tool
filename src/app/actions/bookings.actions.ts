import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpParams } from '@angular/common/http';
import { Booking } from '../models/booking.model';
import { BookingListItem } from '../models/booking-list-item.model';
import { PaginationData } from '../models/pagination.model';

export const BookingActions = createActionGroup({
  source: 'Booking',
  events: {
    'Save Booking Details': props<{ data: Booking }>(),
    'Save Booking Details Start': emptyProps(),
    'Save Booking Details Success': props<{ data: Booking }>(),
    'Save Booking Details Error': props<{ error: string }>(),
    'Load Bookings': props<{
      params: HttpParams | { [param: string]: number | string | string[] };
      keepDataWhileLoading?: boolean;
    }>(),
    'Load Bookings Start': emptyProps(),
    'Load Bookings Success': props<{ data: BookingListItem[]; pagination: PaginationData }>(),
    'Load Bookings Error': props<{ error: string }>(),
    'Load Booking': props<{ id: Booking['cartId'] }>(),
    'Load Booking Start': emptyProps(),
    'Load Booking Success': props<{ data: Booking }>(),
    'Load Booking Error': props<{ error: string }>(),
    'Load Reference Types': emptyProps(),
    'Load Reference Types Start': emptyProps(),
    'Load Reference Types Success': props<{ data: string[] }>(),
    'Load Reference Types Error': props<{ error: string }>(),
    'Load And Select Booking': props<{ id: Booking['cartId'] }>(),
    'Load And Select Booking Start': emptyProps(),
    'Load And Select Booking Success': props<{ data: Booking }>(),
    'Load And Select Booking Error': props<{ error: string }>(),
  },
});
