import { trigger, state, style, animate, transition, query, group, animateChild} from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true } ),
    query(':enter', [
      style({ left: '-100%'})
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%'}))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%'}))
      ], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),
  transition('* <=> FilterPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '-100%'})
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('200ms ease-out', style({ left: '100%'}))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%'}))
      ], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true }),
  ])
  ]);