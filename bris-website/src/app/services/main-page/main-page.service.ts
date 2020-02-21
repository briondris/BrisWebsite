import { Injectable, ViewChild, EventEmitter,ElementRef, Output } from '@angular/core'
import { MainPageComponent } from '../../main-page/main-page.component';

@Injectable()
export class MainPageService {

  isScroll = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  scrollHere(){
    //document.querySelector('#aboutTarget').scrollIntoView()
    this.change.emit(this.isScroll);
  }

}