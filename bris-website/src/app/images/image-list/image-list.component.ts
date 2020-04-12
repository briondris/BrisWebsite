import { Component, OnInit, AfterViewInit, VERSION } from '@angular/core';
import { ImageListService } from '../../services/image/image-list.service';
import { Observable } from 'rxjs';
import { delay, map, tap, finalize } from 'rxjs/operators';
import { ImageList} from '../../interfaces/ImageList';
import { WorkImage } from '../../models/workimage.model';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  imageListFromServer: any[];
  imageList : WorkImage[];
  imageTagName : string;
  filterText: string = "";

  constructor(private serviceImageList: ImageListService) {}

  ngOnInit() {

    if (sessionStorage.getItem('data') != undefined || sessionStorage.getItem('data') != null)
    {
      if(sessionStorage.length > 2){
      console.log(sessionStorage.length);
      console.log(JSON.parse(sessionStorage.getItem('data')));
      this.imageList = JSON.parse(sessionStorage.getItem('data'));
      }
      else{
        this.serviceImageList.getimage().subscribe((data) => {
          this.imageListFromServer = data;
          this.imageList = data;
          console.log("HIT HIT Google fire base");
          sessionStorage.setItem('data', JSON.stringify(this.imageList));
          JSON.parse(sessionStorage.getItem('data'));
          });
      }
    }
    else
    { 
      this.serviceImageList.getimage().subscribe((data) => {
        this.imageListFromServer = data;
        this.imageList = data;
        console.log("HIT HIT Google fire base");
        sessionStorage.setItem('data', JSON.stringify(this.imageList));
        JSON.parse(sessionStorage.getItem('data'));
        });
    }

    this.serviceImageList.change.subscribe(filterText => {
      this.filterText = filterText;
    });
     
  }
 
  
}
