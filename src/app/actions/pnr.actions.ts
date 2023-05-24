import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  FlightPNRConfirmation,
  FlightPNRConfirmationRequest,
  FlightPNRValidation,
  FlightPNRValidationRequest,
} from '../models/pnr.model';

export const PnrActions = createActionGroup({
  source: 'Pnr',
  events: {
    'Validate Flight PNR': props<{ data: FlightPNRValidationRequest }>(),
    'Validate Flight PNR Start': emptyProps(),
    'Validate Flight PNR Success': props<{ data: FlightPNRValidation }>(),
    'Validate Flight PNR Error': props<{ error: string }>(),
    'Set Flight Final Destination': props<{ destination: string }>(),
    'Confirm Flight PNR': props<{ data: FlightPNRConfirmationRequest }>(),
    'Confirm Flight PNR Start': emptyProps(),
    'Confirm Flight PNR Success': props<{ data: FlightPNRConfirmation }>(),
    'Confirm Flight PNR Error': props<{ error: string }>(),
    'Reset Validated PNR': emptyProps(),
    'Save Additional Validation Data': props<{ data: { vendorId: string; productId: string } }>(),
  },
});
