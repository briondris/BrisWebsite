import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs'; 
import { ImagesService } from '../../services/image/images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: []
})
export class ImageComponent implements OnInit {
  imgSrc : string;
  selectedImage: any = null;
  isSubmitted: boolean;
  isVideo: boolean;

  formTemplate= new FormGroup({
    imageUrl : new FormControl('', Validators.required), //yes //comes from firebase all need
    creatorsOfWork : new FormControl('', Validators.required), //yes // filter system of art, interavtive, work
    basicDescription : new FormControl('', Validators.required), //yes // yes all 
    title : new FormControl('', Validators.required), //yes yes all
    isMainImage : new FormControl('', Validators.required),//yes all
    //
    featureToolDescription : new FormControl('', Validators.required),//yes all
    featureToolName: new FormControl('', Validators.required),
    challengeDescription: new FormControl('', Validators.required),
    solutionDescription: new FormControl('', Validators.required),
    //
    dateCreated : new FormControl('', Validators.required), //yes all
    tag : new FormControl('', Validators.required), //yes all
    medium : new FormControl('', Validators.required),// yes all?
    includesVideo : new FormControl(true),
    isHovered : new FormControl(false)
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
      basicDescription : '', 
      title : '', 
      isMainImage : 'false',
      dateCreated : '', 
      featureToolDescription: '',
      featureToolName: '',
      challengeDescription: '',
      solutionDescription: '',
      tag : '', 
      isHovered: false,
      includesVideo: '',
      medium : 'Video'
    });
    this.imgSrc = 'assets/img/UploadImage.png';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

}
