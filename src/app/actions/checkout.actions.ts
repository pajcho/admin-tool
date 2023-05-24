import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Company } from '../models/company.model';
import { BookingChannelsResponse, CheckoutOptionsResponse } from '../models/checkout-options.model';

export const CheckoutActions = createActionGroup({
  source: 'Checkout',
  events: {
    'Load Options': props<{ companyId: Company['id'] }>(),
    'Load Options Start': emptyProps(),
    'Load Options Success': props<{ data: CheckoutOptionsResponse }>(),
    'Load Options Error': props<{ error: string }>(),
    'Load Booking Channels': emptyProps(),
    'Load Booking Channels Start': emptyProps(),
    'Load Booking Channels Success': props<{ data: BookingChannelsResponse }>(),
    'Load Booking Channels Error': props<{ error: string }>(),
  },
});
