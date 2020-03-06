import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/image/images.service';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { ImageListService } from '../../services/image/image-list.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-image-selected',
  templateUrl: './image-selected.component.html',
  styleUrls: ['./image-selected.component.scss']
})
export class ImageSelectedComponent implements OnInit {
  imageSelectedDetails : any[];
  imageTag : string;
  showLoading : boolean; 
  filterForImages: any;
  public filterForImageInfo: any;

  constructor( private route: ActivatedRoute, private serviceImage: ImagesService, private _location: Location, public gallery: Gallery, public lightbox: Lightbox, private serviceImageList: ImageListService ) { } 

  ngOnInit() {
    
    this.imageTag = this.route.snapshot.params['tag'];
    if (sessionStorage.getItem('data') != undefined || sessionStorage.getItem('data') != null)
    {
      this.imageSelectedDetails = JSON.parse(sessionStorage.getItem('data'));
    }
    else
    {
      this.showLoading = true; 
      this.serviceImageList.getimage().subscribe((data) => {
        this.showLoading = false;
        this.imageSelectedDetails = data;
        sessionStorage.setItem('data', JSON.stringify(this.imageSelectedDetails));
        JSON.parse(sessionStorage.getItem('data'));
        console.log("HIT HIT Google fire base");
        });
    }
    this.filterForImages = this.imageSelectedDetails.filter(u=> u.tag == this.imageTag);
    this.filterForImageInfo = this.imageSelectedDetails.filter(u=> u.isMainImage == 'true' && u.tag == this.imageTag);
    console.log(this.filterForImageInfo);
    //console.log(this.imageSelectedDetails);

     /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.imageSelectedDetails);
  }

  backClicked() 
  {
    this._location.back();
  }

}
