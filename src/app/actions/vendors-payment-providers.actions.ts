import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpParams } from '@angular/common/http';
import { VendorsPaymentProvider } from '../models/vendors-payment-provider.model';
import { PaginationData } from '../models/pagination.model';

export const VendorsPaymentProviderActions = createActionGroup({
  source: 'Vendors Payment Provider',
  events: {
    'Save Vendors Payment Provider Details': props<{ data: VendorsPaymentProvider }>(),
    'Save Vendors Payment Provider Details Start': emptyProps(),
    'Save Vendors Payment Provider Details Success': props<{ data: VendorsPaymentProvider }>(),
    'Save Vendors Payment Provider Details Error': props<{ error: string }>(),
    'Toggle Vendors Payment Provider Status': props<{ data: VendorsPaymentProvider }>(),
    'Toggle Vendors Payment Provider Status Start': emptyProps(),
    'Toggle Vendors Payment Provider Status Success': props<{ data: VendorsPaymentProvider }>(),
    'Toggle Vendors Payment Provider Status Error': props<{ error: string }>(),
    'Load Vendors Payment Providers': props<{
      params: HttpParams | { [param: string]: number | string | string[] };
      keepDataWhileLoading?: boolean;
    }>(),
    'Load Vendors Payment Providers Start': emptyProps(),
    'Load Vendors Payment Providers Success': props<{ data: VendorsPaymentProvider[]; pagination: PaginationData }>(),
    'Load Vendors Payment Providers Error': props<{ error: string }>(),
  },
});
