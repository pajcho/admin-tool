import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Feature } from '../models/feature.model';

export const FeatureActions = createActionGroup({
  source: 'Feature',
  events: {
    'Toggle Feature Status': props<{ data: Feature }>(),
    'Toggle Feature Status Start': emptyProps(),
    'Toggle Feature Status Success': props<{ data: Feature }>(),
    'Toggle Feature Status Error': props<{ error: string }>(),
    'Load Features': emptyProps(),
    'Load Features Start': emptyProps(),
    'Load Features Success': props<{ data: Feature[] }>(),
    'Load Features Error': props<{ error: string }>(),
  },
});
