import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PaymentOptions } from '../models/payment-options.model';

export const PaymentActions = createActionGroup({
  source: 'Payment',
  events: {
    'Load Payment Options': props<{ id: string }>(),
    'Load Payment Options Start': emptyProps(),
    'Load Payment Options Success': props<{ data: PaymentOptions }>(),
    'Load Payment Options Error': props<{ error: string }>(),
  },
});
