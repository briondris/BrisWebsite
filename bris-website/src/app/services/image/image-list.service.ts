import { Injectable, Output, EventEmitter } from '@angular/core';
import { ImagesService } from './images.service';
import { Observable } from 'rxjs';
import { delay, map, tap, finalize } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { ImageList } from '../../interfaces/ImageList';

@Injectable({
  providedIn: 'root'
})

export class ImageListService {
  filterText: string = '';

  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor(private serviceImage: ImagesService) { }

  getimage(): Observable<any[]> {
    // Use snapshotChanges().map() to store the key
    return this.serviceImage.imageDetailedList.snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });
  }
  filterInteractive(){
    this.filterText = "Interactive";
    this.change.emit(this.filterText);
    console.log(this.filterText);
  }
  filterArt(){
    this.filterText = "Art";
    this.change.emit(this.filterText);
    console.log(this.filterText);
  }
  filterDev(){
    this.filterText = "Work";
    this.change.emit(this.filterText);
    console.log(this.filterText);
  }
  filterNone(){
    this.filterText = "";
    this.change.emit(this.filterText);
    console.log(this.filterText);
  }

}
