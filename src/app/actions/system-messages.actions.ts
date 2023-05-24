import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpParams } from '@angular/common/http';
import { SystemMessage } from '../models/system-message.model';
import { PaginationData } from '../models/pagination.model';

export const SystemMessageActions = createActionGroup({
  source: 'System Message',
  events: {
    'Save System Message': props<{ data: SystemMessage }>(),
    'Save System Message Start': emptyProps(),
    'Save System Message Success': props<{ data: SystemMessage }>(),
    'Save System Message Error': props<{ error: string }>(),
    'Delete System Message': props<{ data: SystemMessage }>(),
    'Delete System Message Start': emptyProps(),
    'Delete System Message Success': props<{ data: SystemMessage }>(),
    'Delete System Message Error': props<{ error: string }>(),
    'Load System Messages': props<{
      params: HttpParams | { [param: string]: number | string | string[] };
      keepDataWhileLoading?: boolean;
    }>(),
    'Load System Messages Start': emptyProps(),
    'Load System Messages Success': props<{ data: SystemMessage[]; pagination: PaginationData }>(),
    'Load System Messages Error': props<{ error: string }>(),
    'Load System Message': props<{ id: SystemMessage['id'] }>(),
    'Load System Message Start': emptyProps(),
    'Load System Message Success': props<{ data: SystemMessage }>(),
    'Load System Message Error': props<{ error: string }>(),
  },
});
