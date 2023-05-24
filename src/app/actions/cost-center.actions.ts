import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { TravelerCostCenterResponse } from '../models/cost-center.model';

export const CostCenterActions = createActionGroup({
  source: 'Cost Center',
  events: {
    'Load Traveller Cost Centers': props<{ ids: string[] }>(),
    'Load Traveller Cost Centers Start': emptyProps(),
    'Load Traveller Cost Centers Success': props<{ data: TravelerCostCenterResponse[] }>(),
    'Load Traveller Cost Centers Error': props<{ error: string }>(),
  },
});
