import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../shared/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.html',
  styles: []
})
export class ImagesComponent implements OnInit {
  
  constructor(private imageService: ImagesService) { }

  ngOnInit() {
    this.imageService.getImageDetailList();
  }

}
