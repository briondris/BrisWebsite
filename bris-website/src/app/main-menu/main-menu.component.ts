import { Component, OnInit, Input, HostListener} from '@angular/core';
import { MainPageService } from '../services/main-page/main-page.service';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent {
    public aboutSelected: boolean = false;
    public contactSelected: boolean = false; 
    public currentSelected: boolean = false;

    constructor(private mainPageService : MainPageService) { }
    
    //@Input() sideBar: MainPageComponent;

    //@HostListener('click')
    scrollAbout(){
        this.mainPageService.scrollAbout();
        if(!this.aboutSelected){
            this.aboutSelected = true;
            this.contactSelected = false;
            this.currentSelected = false;
          }
        //console.log("Got here 1");
    }
    scrollInfo(){
        this.mainPageService.scrollInfo();
        if(!this.contactSelected){
            this.aboutSelected = false;
            this.contactSelected = true;
            this.currentSelected = false;
          }
        //console.log("Got here Info");
    }
    scrollCurrent(){
        this.mainPageService.scrollCurrent();
        if(!this.currentSelected){
            this.aboutSelected = false;
            this.contactSelected = false;
            this.currentSelected = true;
          }
    }
}