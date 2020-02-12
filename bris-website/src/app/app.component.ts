import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav} from '@angular/material';
import {RouterOutlet} from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements AfterViewInit{
  title = 'bris-website';
  //opened = false;
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  constructor() { }

    ngAfterViewInit() {
      this.sidenav.toggle();
    }
}
 
