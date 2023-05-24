import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpParams } from '@angular/common/http';
import { Company } from '../models/company.model';
import { PaginationData } from '../models/pagination.model';

export const CompanyActions = createActionGroup({
  source: 'Company',
  events: {
    'Save Company Details': props<{ data: Company }>(),
    'Save Company Details Start': emptyProps(),
    'Save Company Details Success': props<{ data: Company }>(),
    'Save Company Details Error': props<{ error: string }>(),
    'Delete Company': props<{ data: Company }>(),
    'Delete Company Start': emptyProps(),
    'Delete Company Success': props<{ data: Company }>(),
    'Delete Company Error': props<{ error: string }>(),
    'Load Companies': props<{
      params: HttpParams | { [param: string]: number | string | string[] };
      keepDataWhileLoading?: boolean;
    }>(),
    'Load Companies Start': emptyProps(),
    'Load Companies Success': props<{ data: Company[]; pagination: PaginationData }>(),
    'Load Companies Error': props<{ error: string }>(),
    'Load Company': props<{ id: Company['id'] }>(),
    'Load Company Start': emptyProps(),
    'Load Company Success': props<{ data: Company }>(),
    'Load Company Error': props<{ error: string }>(),
    'Toggle Company Subscription Status': props<{ data: Company }>(),
    'Toggle Company Subscription Status Start': emptyProps(),
    'Toggle Company Subscription Status Success': props<{ data: Company }>(),
    'Toggle Company Subscription Status Error': props<{ error: string }>(),
  },
});
