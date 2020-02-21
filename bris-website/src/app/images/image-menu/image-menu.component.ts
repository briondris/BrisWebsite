import { Component, OnInit } from '@angular/core';
import { ImageListService } from '../../services/image/image-list.service';

@Component({
  selector: 'app-image-menu',
  templateUrl: './image-menu.component.html',
  styleUrls: ['./image-menu.component.scss']
})
export class ImageMenuComponent implements OnInit {
  constructor(private serviceImageList : ImageListService) { }

  ngOnInit() {

  }

  goToInteractive(){
    this.serviceImageList.filterInteractive();
  }
  goToArt(){
    this.serviceImageList.filterArt();
  }
  goToDev(){
    this.serviceImageList.filterDev();
  }
  goToAllWork(){
    this.serviceImageList.filterNone();
  }

}
