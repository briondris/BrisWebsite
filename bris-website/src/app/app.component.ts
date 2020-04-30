import { Component, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { RouterOutlet, Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
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
export class AppComponent implements AfterViewInit {
  title = 'bris-website';
  top: any;
  left: any;
  expand = false;

  // @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  constructor() { }
  // for loading 
  //   this.router.events.subscribe((routeEvent: Event) => {
  //     if (routeEvent instanceof NavigationStart) {
  //       this.showLoading = true;
  //     }
  //     if (routeEvent instanceof NavigationEnd) {
  //       // Hide loading indicator
  //       this.timeout = setTimeout(() => {
  //         clearTimeout(this.timeout);
  //         this.showLoading = false;
  //       }, 1000);
  //     }
  //   });
  // }

  @HostListener('document:click', ['$event'])
  onClick($event) {
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500)
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event) {
    this.top = ($event.pageY - 10) + "px";
    this.left = ($event.pageX - 10) + "px";
  }
  ngAfterViewInit() {
    //this.sidenav.toggle();

  }
}

