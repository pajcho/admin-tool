import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export const elementCrossFade = trigger('elementCrossFade', [
  transition(':leave', [
    animate('300ms', keyframes([style({ opacity: 1 }), style({ opacity: 0 }), style({ opacity: 0 })])),
  ]),
  transition(':enter', [
    animate('300ms', keyframes([style({ opacity: 0 }), style({ opacity: 0 }), style({ opacity: 1 })])),
  ]),
]);
