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
  imageList : any[];
  imageTagName : string;
  showLoading: boolean;
  filterText: string = "";
  tooltipHover: boolean[] = [];
  zone1 = { isHovered: false };

  constructor(private serviceImageList: ImageListService) {}

  ngOnInit() {
    //console.log(localStorage.getItem('data'));
    if (localStorage.getItem('data') != undefined || localStorage.getItem('data') != null)
    {
      this.imageList = JSON.parse(localStorage.getItem('data'));
    }
    else
    {
      this.showLoading = true; 
      this.serviceImageList.getimage().subscribe((data) => {
        this.showLoading = false;
        this.imageList = data;
        localStorage.setItem('data', JSON.stringify(this.imageList));
        JSON.parse(localStorage.getItem('data'));
        });
    }

    this.serviceImageList.change.subscribe(filterText => {
      console.log("HIT HIT HIT");
      this.filterText = filterText;
    });
     
  }
 
  
}
