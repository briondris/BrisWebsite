import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../shared/services/images.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styles: ['.image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  imageList : Observable<any[]>;
  imageTagName : string;

  constructor(private serviceImage: ImagesService ) { }

  ngOnInit() {
    // Use snapshotChanges().map() to store the key
    this.imageList = this.serviceImage.imageDetailedList.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })      
      );
    });

   // console.log(this.imageList);
  }
}
