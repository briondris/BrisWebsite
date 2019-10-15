import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../shared/services/images.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styles: ['.image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  imageList : any[];
  rowIndexArray : any[];

  constructor(private serviceImage: ImagesService ) { }

  ngOnInit() {
    this.serviceImage.imageDetailedList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => {return item.payload.val();})
        //if you know how may cols you want then you need to know the rows. 
        this.rowIndexArray = Array.from(Array(Math.ceil(this.imageList.length / 3)).keys());
      }
    );
  }

}
