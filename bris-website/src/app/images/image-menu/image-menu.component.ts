import { Component, OnInit } from '@angular/core';
import { ImageListService } from '../../services/image/image-list.service';

@Component({
  selector: 'app-image-menu',
  templateUrl: './image-menu.component.html',
  styleUrls: ['./image-menu.component.scss']
})
export class ImageMenuComponent implements OnInit {
  public allworkBtnSelected : boolean = true;
  public artBtnSelected : boolean = false; 
  public devBtnSelected : boolean = false;
  public interactiveBtnSelected : boolean = false;

  constructor(private serviceImageList : ImageListService) { }

  ngOnInit() {

  }

  goToInteractive(){
    this.serviceImageList.filterInteractive();
    if(!this.interactiveBtnSelected){
      this.interactiveBtnSelected = true;
      this.artBtnSelected = false;
      this.devBtnSelected = false;
      this.allworkBtnSelected = false
    }
  }
  goToArt(){
    this.serviceImageList.filterArt();
    if(!this.artBtnSelected){
      this.interactiveBtnSelected = false;
      this.artBtnSelected = true;
      this.devBtnSelected = false;
      this.allworkBtnSelected = false;
    }
  }
  goToDev(){
    this.serviceImageList.filterDev();
    if(!this.devBtnSelected){
      this.interactiveBtnSelected = false;
      this.artBtnSelected = false;
      this.devBtnSelected = true;
      this.allworkBtnSelected = false;
    }
  }
  goToAllWork(){
    this.serviceImageList.filterNone();
    if(!this.allworkBtnSelected){
      this.interactiveBtnSelected = false;
      this.artBtnSelected = false;
      this.devBtnSelected = false;
      this.allworkBtnSelected = true;
    }
  }

}
