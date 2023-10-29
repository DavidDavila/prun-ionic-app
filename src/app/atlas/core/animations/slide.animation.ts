import { trigger, transition, style, animate } from '@angular/animations';

export const SLIDEIN_ANIMATION = [
  trigger('slideOut', [
    transition(':leave', [
      style({ transform: 'translateX(0%)' }),

      animate('0.3s', style({ transform: 'translateX(100%)' })),
    ]),
  ]),
];

export const SLIDEOUT_ANIMATION = [
  trigger('slideIn', [
    transition(':enter', [
      style({ transform: 'translateX(100%)' }),

      animate('0.15s', style({ transform: 'translateX(0%)' })),
    ]),
  ]),
];
