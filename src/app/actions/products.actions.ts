import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpParams } from '@angular/common/http';
import { Product } from '../models/product.model';
import { PaginationData } from '../models/pagination.model';

export const ProductActions = createActionGroup({
  source: 'Product',
  events: {
    'Save Product Details': props<{ data: Product }>(),
    'Save Product Details Start': emptyProps(),
    'Save Product Details Success': props<{ data: Product }>(),
    'Save Product Details Error': props<{ error: string }>(),
    'Toggle Product Status': props<{ data: Product }>(),
    'Toggle Product Status Start': emptyProps(),
    'Toggle Product Status Success': props<{ data: Product }>(),
    'Toggle Product Status Error': props<{ error: string }>(),
    'Load Products': props<{
      params: HttpParams | { [param: string]: number | string | string[] };
      keepDataWhileLoading?: boolean;
    }>(),
    'Load Products Start': emptyProps(),
    'Load Products Success': props<{ data: Product[]; pagination: PaginationData }>(),
    'Load Products Error': props<{ error: string }>(),
  },
});
