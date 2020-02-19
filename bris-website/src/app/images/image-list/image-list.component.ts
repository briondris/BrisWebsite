import { Component, OnInit, AfterViewInit, VERSION } from '@angular/core';
import { ImagesService } from '../../shared/services/images.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { delay, map, tap, finalize } from 'rxjs/operators';
@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styles: ['.image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  imageList : Observable<any[]>;
  imageTagName : string;
  timeout : any;
  name = 'Angular ' + VERSION.full;
  showLoading: boolean;

  constructor(private serviceImage: ImagesService ) {

  }

  ngOnInit() {
    this.getimage();
    // this.timeout = setTimeout(() => {
    //   clearTimeout(this.timeout);
    //   this.showLoading = false;
    // }, 3000);
  }

  private getimage() {
    // Use snapshotChanges().map() to store the key
    this.imageList = this.serviceImage.imageDetailedList.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })    
      );
    });
    
    // .pipe(
    //     finalize(() => 
    //       this.isLoading = false
    //     )).subscribe(imageList => this.imageList = imageList);
    // this.imageList.pipe(
    //   finalize(() => {
    //     this.isLoading = false;
    //     console.log("Happened123");
    //   }));
  }
  
}
