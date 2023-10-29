import { trigger, transition, style, animate } from '@angular/animations';

export const LEAVE_OPACITYOUT_ANIMATION = [
  trigger('opacityOut', [
    transition(':leave', [
      style({ opacity: 1 }),

      animate('0.3s', style({ opacity: 0 })),
    ]),
  ]),
];
