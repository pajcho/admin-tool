import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpParams } from '@angular/common/http';
import { VatCategory } from '../models/vat-category.model';
import { PaginationData } from '../models/pagination.model';

export const VatCategoryActions = createActionGroup({
  source: 'Vat Category',
  events: {
    'Save Vat Category Details': props<{ data: VatCategory }>(),
    'Save Vat Category Details Start': emptyProps(),
    'Save Vat Category Details Success': props<{ data: VatCategory }>(),
    'Save Vat Category Details Error': props<{ error: string }>(),
    'Toggle Vat Category Status': props<{ data: VatCategory }>(),
    'Toggle Vat Category Status Start': emptyProps(),
    'Toggle Vat Category Status Success': props<{ data: VatCategory }>(),
    'Toggle Vat Category Status Error': props<{ error: string }>(),
    'Load Vat Categories': props<{
      params: HttpParams | { [param: string]: number | string | string[] };
      keepDataWhileLoading?: boolean;
    }>(),
    'Load Vat Categories Start': emptyProps(),
    'Load Vat Categories Success': props<{ data: VatCategory[]; pagination: PaginationData }>(),
    'Load Vat Categories Error': props<{ error: string }>(),
  },
});
