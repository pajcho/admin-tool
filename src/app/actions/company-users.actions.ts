import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpParams } from '@angular/common/http';
import { CompanyUser } from '../models/company-user.model';
import { PaginationData } from '../models/pagination.model';

export const CompanyUserActions = createActionGroup({
  source: 'Company User',
  events: {
    'Save Company User Details': props<{ data: CompanyUser }>(),
    'Save Company User Details Start': emptyProps(),
    'Save Company User Details Success': props<{ data: CompanyUser }>(),
    'Save Company User Details Error': props<{ error: string }>(),
    'Load Company Users': props<{
      params: HttpParams | { [param: string]: number | string | string[] };
      keepDataWhileLoading?: boolean;
    }>(),
    'Load Company Users Start': emptyProps(),
    'Load Company Users Success': props<{ data: CompanyUser[]; pagination: PaginationData }>(),
    'Load Company Users Error': props<{ error: string }>(),
    'Load Company User': props<{ id: CompanyUser['id'] }>(),
    'Load Company User Start': emptyProps(),
    'Load Company User Success': props<{ data: CompanyUser }>(),
    'Load Company User Error': props<{ error: string }>(),
    'Load And Select Company User': props<{ id: CompanyUser['id'] }>(),
    'Load And Select Company User Start': emptyProps(),
    'Load And Select Company User Success': props<{ data: CompanyUser }>(),
    'Load And Select Company User Error': props<{ error: string }>(),
  },
});
