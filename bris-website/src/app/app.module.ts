import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule  } from '@angular/fire/storage'
import { AngularFireDatabaseModule  } from '@angular/fire/database'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { MaterialModule } from './material/material.module';
import { MatToolbarModule, MatButtonModule } from "@angular/material";
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageService } from './main-page/main-page.service';
import { InformationContactComponent } from './information-contact/information-contact.component';
import { environment } from '../environments/environment';
import { ImagesService } from './shared/services/images.service';
import { ImagesComponent } from './images/images';
import { LoadedDirective } from './images/image-list/loaded.directive';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageSelectedComponent } from './images/image-selected/image-selected.component';
import { MainPageAnimationComponent } from './main-page-animation/main-page-animation.component';
import { ParallaxDirective } from './parallax.directive';
import { GalleryModule } from 'ng-gallery';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ImageMenuComponent } from './image-menu/image-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainPageComponent,
    ImagesComponent,
    InformationContactComponent,
    ImageComponent,
    ImageListComponent,
    ImageSelectedComponent,
    MainPageAnimationComponent,
    ParallaxDirective,
    LoadedDirective,
    LoadingSpinnerComponent,
    ImageMenuComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule, 
    AngularFireDatabaseModule,
    AppRoutingModule,
    MaterialModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent},
      { path: 'image', component:ImagesComponent },
      { path: 'image/selected/:tag', component: ImageSelectedComponent},
      { path: 'list', component: ImageListComponent },
      { path: 'image/upload/23', component: ImageComponent},
      {path: 'informationContact', component: InformationContactComponent},
    ]),
    BrowserAnimationsModule,
    GalleryModule.forRoot({
      style: {
        height: '700px',
        width: '900px'
      }
    })
  ],
  providers: [ImagesService, MainPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
