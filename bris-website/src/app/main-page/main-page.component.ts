import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  el: any;
  constructor() { }

  ngOnInit() {
    let el = <HTMLElement>document.querySelector(".dropEl");
    // el.addEventListener("mousemove", (e) => { 
    //   //get vars for scss
    //   // el.style.setProperty('--x', -e.offsetX + "px");
    //   // el.style.setProperty('--y', -e.offsetY + "px");

    //   //move possition with js 
    //   el.style.margin = (-e.offsetY - -e.offsetX)/5 + "px";
    //   //el.style.backgroundPositionY = ;
    // });
  }

}
