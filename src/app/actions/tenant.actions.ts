import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Tmc } from '../config/tmc';

export const TenantActions = createActionGroup({
  source: 'Tenant',
  events: {
    'Load Primary Tenants': emptyProps(),
    'Load Primary Tenants Start': emptyProps(),
    'Load Primary Tenants Success': props<{ data: Tmc[] }>(),
    'Load Primary Tenants Error': props<{ error: string }>(),
  },
});
