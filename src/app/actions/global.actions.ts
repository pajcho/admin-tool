import { createActionGroup, props } from '@ngrx/store';

export const GlobalActions = createActionGroup({
  source: 'Global',
  events: {
    'Show Success Message': props<{ message: string; action?: string; duration?: number }>(),
    'Show Error Message': props<{ message: string; action?: string; duration?: number }>(),
  },
});
