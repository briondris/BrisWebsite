import { Component, OnInit, AfterViewInit, VERSION } from '@angular/core';
import { ImageListService } from '../../services/image/image-list.service';
import { Observable } from 'rxjs';
import { delay, map, tap, finalize } from 'rxjs/operators';
import { ImageList} from '../../interfaces/ImageList';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styles: ['.image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  imageListFromServer: any[];
  imageList : any[];
  imageTagName : string;
  showLoading: boolean;
  filterText: string = "";
  tooltipHover: boolean[] = [];

  constructor(private serviceImageList: ImageListService) {}

  ngOnInit() {

    if (sessionStorage.getItem('data') != undefined || sessionStorage.getItem('data') != null)
    {
      this.imageList = JSON.parse(sessionStorage.getItem('data'));
    }
    else
    {
      this.showLoading = true; 
      this.serviceImageList.getimage().subscribe((data) => {
        this.showLoading = false;
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
