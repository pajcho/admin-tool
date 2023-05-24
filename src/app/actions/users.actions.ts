import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpParams } from '@angular/common/http';
import { User } from '../models/user.model';
import { CompanyUser } from '../models/company-user.model';
import { PaginationData } from '../models/pagination.model';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Save User Details': props<{ data: User }>(),
    'Save User Details Start': emptyProps(),
    'Save User Details Success': props<{ data: User }>(),
    'Save User Details Error': props<{ error: string }>(),
    'Change User Password': props<{ data: User }>(),
    'Change User Password Start': emptyProps(),
    'Change User Password Success': props<{ data: User }>(),
    'Change User Password Error': props<{ error: string }>(),
    'Load Users': props<{
      params: HttpParams | { [param: string]: number | string | string[] };
      keepDataWhileLoading?: boolean;
    }>(),
    'Load Users Start': emptyProps(),
    'Load Users Success': props<{ data: User[]; pagination: PaginationData }>(),
    'Load Users Error': props<{ error: string }>(),
    'Load User': props<{ id: User['id'] }>(),
    'Load User Start': emptyProps(),
    'Load User Success': props<{ data: User }>(),
    'Load User Error': props<{ error: string }>(),
    'Get Override Token': props<{ username: CompanyUser['username']; redirectPath?: string }>(),
    'Get Override Token Start': emptyProps(),
    'Get Override Token Success': props<{ token: string; username: CompanyUser['username']; redirectPath?: string }>(),
    'Get Override Token Error': props<{ error: string }>(),
  },
});
