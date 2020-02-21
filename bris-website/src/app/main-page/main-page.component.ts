import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { MainPageService } from '../services/main-page/main-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  @ViewChild('aboutTarget',{static: false}) scrollToMe: ElementRef;
  isScroll = false;

  constructor(private mainPageService : MainPageService) { }

  scrollHere(){
    console.log("Got here 2");
    //document.querySelector('#aboutTarget').scrollIntoView()
    this.scrollToMe.nativeElement.scrollIntoView({ behavior: 'smooth' })
  }

  ngOnInit() {
    this.mainPageService.change.subscribe(isScroll => {
      this.isScroll = isScroll;
      this.scrollHere();
    });

    //let el = <HTMLElement>document.querySelector(".dropEl");
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
