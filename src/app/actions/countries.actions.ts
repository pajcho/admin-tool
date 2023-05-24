import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Country } from '../models/country.model';

export const CountryActions = createActionGroup({
  source: 'Country',
  events: {
    'Load Countries': emptyProps(),
    'Load Countries Start': emptyProps(),
    'Load Countries Success': props<{ data: Country[] }>(),
    'Load Countries Error': props<{ error: string }>(),
  },
});
