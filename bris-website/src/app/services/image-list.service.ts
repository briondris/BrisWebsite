import { Injectable } from '@angular/core';
import { ImagesService } from './image/images.service';
import { Observable } from 'rxjs';
import { delay, map, tap, finalize } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { ImageList} from '../interfaces/ImageList';

@Injectable({
  providedIn: 'root'
})
export class ImageListService {

  constructor(private serviceImage: ImagesService ) { }
  
  getimage(): Observable<any[]>{
    // Use snapshotChanges().map() to store the key
    return this.serviceImage.imageDetailedList.snapshotChanges().map(changes => 
        {
            return changes.map(c => ({
                key: c.payload.key, ...c.payload.val()
            }))
        });
    // return this.serviceImage.imageDetailedList.snapshotChanges().map(changes => {
    //   return changes.map(c => ({ 
    //     key: c.payload.key, ...c.payload.val() 
    //   }));
    // });
  }
  
}
  