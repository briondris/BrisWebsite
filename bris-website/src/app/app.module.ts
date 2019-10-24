import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule  } from '@angular/fire/storage'
import { AngularFireDatabaseModule  } from '@angular/fire/database'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MainPageComponent } from './main-page/main-page.component';
import { InformationContactComponent } from './information-contact/information-contact.component';
import { environment } from '../environments/environment';
import { ImagesService } from './shared/services/images.service';
import { ImagesComponent } from './images/images';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageSelectedComponent } from './images/image-selected/image-selected.component';

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
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule, 
    AngularFireDatabaseModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      { path: 'image', component:ImagesComponent },
      { path: 'image/selected/:title', component: ImageSelectedComponent},
      { path: 'list', component: ImageListComponent },
      { path: 'image/upload/23', component: ImageComponent},
      {path: 'informationContact', component: InformationContactComponent},
    ]),
    BrowserAnimationsModule
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
