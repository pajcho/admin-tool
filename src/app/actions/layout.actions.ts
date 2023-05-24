import { createActionGroup, props } from '@ngrx/store';

export const LayoutActions = createActionGroup({
  source: 'Layout',
  events: {
    'Toggle Sidenav': props<{ visible: boolean }>(),
  },
});
