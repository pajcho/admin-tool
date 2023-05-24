import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Cart } from '../models/cart.model';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Load Cart Details': props<{ id: Cart['id'] }>(),
    'Load Cart Details Start': emptyProps(),
    'Load Cart Details Success': props<{ data: Cart }>(),
    'Load Cart Details Error': props<{ error: string }>(),
  },
});
