import { Component, OnInit, Input, HostListener} from '@angular/core';
import { MainPageService } from '../services/main-page/main-page.service';
import { Router } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
    selector: 'app-second-menu',
    templateUrl: './second-menu.component.html',
    styleUrls: ['./second-menu.component.scss']
})

export class SecondMenuComponent {
    public aboutSelected: boolean = false;
    public contactSelected: boolean = false; 
    public currentSelected: boolean = false;

    constructor(private mainPageService : MainPageService, private router: Router) { }
    
    //@Input() sideBar: MainPageComponent;

    //@HostListener('click')
    isHomeRoute() {
        return this.router.url === '/';
      }
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