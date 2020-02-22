import { Component, OnInit, Input, HostListener} from '@angular/core';
import { MainPageService } from '../services/main-page/main-page.service';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent {

    constructor(private mainPageService : MainPageService) { }
    
    //@Input() sideBar: MainPageComponent;

    //@HostListener('click')
    scrollAbout(){
        this.mainPageService.scrollAbout();
        console.log("Got here 1");
    }
    scrollInfo(){
        this.mainPageService.scrollInfo();
        console.log("Got here 1");
    }
}