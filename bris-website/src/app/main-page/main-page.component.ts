import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { MainPageService } from '../services/main-page/main-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  @ViewChild('aboutTarget',{static: false}) scrollToAbout: ElementRef;
  @ViewChild('infoTarget',{static: false}) scrollToInfo: ElementRef;

  isScrollAbout = false;
  isScrollInfo = false;

  constructor(private mainPageService : MainPageService) { }

  scrollAbout(){
    //document.querySelector('#aboutTarget').scrollIntoView()
    this.scrollToAbout.nativeElement.scrollIntoView({ behavior: 'smooth' })
  }
  scrollInfo(){
    //document.querySelector('#aboutTarget').scrollIntoView()
    this.scrollToInfo.nativeElement.scrollIntoView({ behavior: 'smooth' })
  }

  ngOnInit() {
    this.mainPageService.changeAbout.subscribe(isScroll => {
      this.isScrollAbout = isScroll;
      this.scrollAbout();
    });

    this.mainPageService.changeInfo.subscribe(isScroll => {
      this.isScrollInfo = isScroll;
      this.scrollInfo();
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
