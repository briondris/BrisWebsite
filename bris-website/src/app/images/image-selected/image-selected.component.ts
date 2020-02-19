import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../shared/services/images.service';
import { VERSION } from '@angular/material';
import { Gallery } from 'ng-gallery';
import { map } from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-image-selected',
  templateUrl: './image-selected.component.html',
  styles: ['.image-selected.component.scss']
})
export class ImageSelectedComponent implements OnInit {
  imageSelectedDetails : Observable<any[]>;
  imageTag : string;
  version = VERSION;

  constructor( private route: ActivatedRoute, private serviceImage: ImagesService, private _location: Location, public gallery: Gallery) { } 

  ngOnInit() {
    this.imageTag = this.route.snapshot.params['tag'];
    this.imageSelectedDetails = this.serviceImage.imageDetailedList.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })      
      );
    });
    //console.log(this.imageSelectedDetails);
  }

  backClicked() 
  {
    this._location.back();
  }

}
