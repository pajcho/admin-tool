import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpParams } from '@angular/common/http';
import { BillingRequest } from '../models/billing-request.model';
import { PaginationData } from '../models/pagination.model';

export const BillingRequestActions = createActionGroup({
  source: 'Billing Request',
  events: {
    'Change Status': props<{ data: BillingRequest }>(),
    'Change Status Start': emptyProps(),
    'Change Status Success': props<{ data: BillingRequest }>(),
    'Change Status Error': props<{ error: string }>(),
    'Load Requests': props<{
      params: HttpParams | { [param: string]: number | string | string[] };
      keepDataWhileLoading?: boolean;
    }>(),
    'Load Requests Start': emptyProps(),
    'Load Requests Success': props<{ data: BillingRequest[]; pagination: PaginationData }>(),
    'Load Requests Error': props<{ error: string }>(),
  },
});
