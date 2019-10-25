import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../shared/services/images.service';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-image-selected',
  templateUrl: './image-selected.component.html',
  styles: []
})
export class ImageSelectedComponent implements OnInit {
  imageSelectedDetails : Observable<any[]>;
  imageTag : string;

  constructor( private route: ActivatedRoute, private serviceImage: ImagesService) { } 

  ngOnInit() {
    this.imageTag = this.route.snapshot.params['tag'];
    this.imageSelectedDetails = this.serviceImage.imageDetailedList.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })      
      );
    });
    console.log(this.imageSelectedDetails);
  }

}
