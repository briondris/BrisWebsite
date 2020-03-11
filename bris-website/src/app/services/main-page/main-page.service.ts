import { Injectable, ViewChild, EventEmitter,ElementRef, Output } from '@angular/core'
import { MainPageComponent } from '../../main-page/main-page.component';

@Injectable()
export class MainPageService {

  isScrollAbout = false;
  isScrollInfo = false;
  isScrollCurrent = false;

  @Output() changeAbout: EventEmitter<boolean> = new EventEmitter();
  @Output() changeInfo: EventEmitter<boolean> = new EventEmitter();
  @Output() changeCurrent: EventEmitter<boolean> = new EventEmitter();

  scrollAbout(){
    //document.querySelector('#aboutTarget').scrollIntoView()
    this.changeAbout.emit(this.isScrollAbout);
  }
  scrollInfo(){
    //document.querySelector('#aboutTarget').scrollIntoView()
    this.changeInfo.emit(this.isScrollInfo);
  }
  scrollCurrent(){
    this.changeCurrent.emit(this.isScrollCurrent);
  }

}