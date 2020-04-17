import { Component, OnInit } from '@angular/core';
import { animate, style, state, transition, trigger, group, useAnimation, keyframes, animation, query, stagger } from "@angular/animations";

@Component({
  selector: 'app-main-page-scroll-animation',
  templateUrl: './main-page-scroll-animation.component.html',
  styleUrls: ['./main-page-scroll-animation.component.scss']
})
export class MainPageScrollAnimationComponent implements OnInit {

  constructor() { }
  animate2 =  [
    query('div', [ 
      stagger(100, [
        animate('2000ms', style({ right: '-100px'}))
      ])
    ])
  ];
  ngOnInit() {
  }

}
