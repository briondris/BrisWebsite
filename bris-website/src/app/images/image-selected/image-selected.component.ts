import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/image/images.service';
import { Gallery } from 'ng-gallery';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { ImageListService } from '../../services/image/image-list.service';

@Component({
  selector: 'app-image-selected',
  templateUrl: './image-selected.component.html',
  styles: ['.image-selected.component.scss']
})
export class ImageSelectedComponent implements OnInit {
  imageSelectedDetails : any[];
  imageTag : string;
  showLoading : boolean; 

  constructor( private route: ActivatedRoute, private serviceImage: ImagesService, private _location: Location, public gallery: Gallery, private serviceImageList: ImageListService ) { } 

  ngOnInit() {
    this.imageTag = this.route.snapshot.params['tag'];
    if (localStorage.getItem('data') != undefined || localStorage.getItem('data') != null)
    {
      this.imageSelectedDetails = JSON.parse(localStorage.getItem('data'));
    }
    else
    {
      this.showLoading = true; 
      this.serviceImageList.getimage().subscribe((data) => {
        this.showLoading = false;
        this.imageSelectedDetails = data;
        localStorage.setItem('data', JSON.stringify(this.imageSelectedDetails));
        JSON.parse(localStorage.getItem('data'));
        console.log("HIT HIT HIT");
        });
    }
    //console.log(this.imageSelectedDetails);
  }

  backClicked() 
  {
    this._location.back();
  }

}
