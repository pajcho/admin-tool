import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpParams } from '@angular/common/http';
import { Vendor } from '../models/vendor.model';
import { PaginationData } from '../models/pagination.model';

export const VendorActions = createActionGroup({
  source: 'Vendor',
  events: {
    'Save Vendor Details': props<{ data: Vendor }>(),
    'Save Vendor Details Start': emptyProps(),
    'Save Vendor Details Success': props<{ data: Vendor }>(),
    'Save Vendor Details Error': props<{ error: string }>(),
    'Delete Vendor': props<{ data: Vendor }>(),
    'Delete Vendor Start': emptyProps(),
    'Delete Vendor Success': props<{ data: Vendor }>(),
    'Delete Vendor Error': props<{ error: string }>(),
    'Toggle Vendor Status': props<{ data: Vendor }>(),
    'Toggle Vendor Status Start': emptyProps(),
    'Toggle Vendor Status Success': props<{ data: Vendor }>(),
    'Toggle Vendor Status Error': props<{ error: string }>(),
    'Load Vendors': props<{
      params: HttpParams | { [param: string]: number | string | string[] };
      keepDataWhileLoading?: boolean;
    }>(),
    'Load Vendors Start': emptyProps(),
    'Load Vendors Success': props<{ data: Vendor[]; pagination: PaginationData }>(),
    'Load Vendors Error': props<{ error: string }>(),
  },
});
