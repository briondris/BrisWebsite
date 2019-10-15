import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs'; 
import { ImagesService } from '../../shared/services/images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: []
})
export class ImageComponent implements OnInit {
  imgSrc : string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate= new FormGroup({
    imageUrl : new FormControl('', Validators.required), //yes
    creatorsOfWork : new FormControl('', Validators.required), //yes
    description : new FormControl('', Validators.required), //yes
    title : new FormControl('', Validators.required), //yes
    isMainImage : new FormControl('', Validators.required),//yes
    dateCreated : new FormControl('', Validators.required), //yes
    tag : new FormControl('', Validators.required), //yes
    medium : new FormControl('', Validators.required)
  });

  constructor(private storage: AngularFireStorage, private imageService: ImagesService) { }

  ngOnInit() {
    this.imageService.getImageDetailList();
    this.resetForm();
  }

  showPreview(event: any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else{
      this.imgSrc = 'assets/img/UploadImage.png';
      this.selectedImage = null ;
    }
  }

  onSubmit(formValue){
    this.isSubmitted = true;
    if(this.formTemplate.valid){
      var filePath = `${formValue.tag}${this.selectedImage.name.split('.').slice(0,-1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() =>{
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.imageService.insertImageDetails(formValue); 
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls(){
    return this.formTemplate['controls']; 
  }

  resetForm(){
    this.formTemplate.reset();
    this.formTemplate.setValue({
      imageUrl : '', 
      creatorsOfWork : 'Art', 
      description : '', 
      title : '', 
      isMainImage : 'No',
      dateCreated : '', 
      tag : '', 
      medium : 'Video'
    });
    this.imgSrc = 'assets/img/UploadImage.png';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

}
