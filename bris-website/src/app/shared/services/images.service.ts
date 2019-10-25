import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  imageDetailedList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }
  
  getImageDetailList(){
    this.imageDetailedList = this.firebase.list('imageDetails');
  }

  insertImageDetails(imageDetails) {
    this.imageDetailedList.push(imageDetails);
  }
  
}
  