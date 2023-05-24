import { createActionGroup, props } from '@ngrx/store';

export interface ConfirmationData {
  template: string;
  confirm: {
    label: string;
    color?: string;
  };
  cancel?: {
    label: string;
  };
}

export const ConfirmationDialogActions = createActionGroup({
  source: 'Confirmation Dialog',
  events: {
    Show: props<{ data: ConfirmationData; ok?: () => any; cancel?: () => any }>(),
  },
});
