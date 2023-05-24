import { createActionGroup, props } from "@ngrx/store";
import { Tmc } from './tmc.model';

export const TmcActions = createActionGroup({
  source: 'Tmc',
  events: {
    'Set Tmc': props<{ tmc: Tmc }>(),
  },
});
