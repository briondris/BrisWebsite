import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/image/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.html',
  styleUrls: ['./images.scss']
})
export class ImagesComponent implements OnInit {
  
  constructor(private imageService: ImagesService) { }

  ngOnInit() {
    this.imageService.getImageDetailList();
  }

}
