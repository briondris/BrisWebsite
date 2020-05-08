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
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { MatGridListModule } from '@angular/material';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { SecondMenuComponent } from './second-menu/second-menu.component';
import { MaterialModule } from './material/material.module';
import { MatToolbarModule, MatButtonModule } from "@angular/material";
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageService } from './services/main-page/main-page.service';
import { InformationContactComponent } from './information-contact/information-contact.component';
import { environment } from '../environments/environment';
import { ImagesService } from './services/image/images.service';
import { ImagesComponent } from './images/images';
import { ImageListService } from './services/image/image-list.service';
import { ImageComponent } from './images/image-uploader/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageSelectedComponent } from './images/image-selected/image-selected.component';
import { MainPageAnimationComponent } from './main-page-animation/main-page-animation.component';
import { MainPageScrollAnimationComponent } from './main-page-scroll-animation/main-page-scroll-animation.component';
// import { ParallaxDirective } from './parallax.directive';
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
// import {FlexLayoutModule} from '@angular/flex-layout'

import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ImageMenuComponent } from './images/image-menu/image-menu.component';
import {FilterPipe} from './pipes/filter.pipe';
import { PreLoadingDirective } from './preloading.directive';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { HoverDirective } from './hover.directive';
import { MatGridListResponsive } from './mat-grid-list-responsive.directive';
import { AnimateWithScrollDirective } from './animate-with-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    SecondMenuComponent,
    MainPageComponent,
    ImagesComponent,
    InformationContactComponent,
    ImageComponent,
    ImageListComponent,
    ImageSelectedComponent,
    MainPageAnimationComponent,
    MainPageScrollAnimationComponent,
    LoadingSpinnerComponent,
    ImageMenuComponent,
    PreLoadingDirective,
    FilterPipe,
    ScrollSpyDirective,
    HoverDirective,
    MatGridListResponsive,
    AnimateWithScrollDirective
  ],
  imports: [
    BrowserModule,
    // FlexLayoutModule,
    ScrollDispatchModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule, 
    AngularFireDatabaseModule,
    AppRoutingModule,
    MaterialModule,
    MatRippleModule,
    MatNativeDateModule,
    MatToolbarModule,
    NgxParallaxScrollModule,
    ReactiveFormsModule, 
    MatGridListModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent},
      { path: 'image', component:ImagesComponent },
      { path: 'image/selected/:tag', component: ImageSelectedComponent},
      { path: 'list', component: ImageListComponent },
      // { path: 'image/upload/23', component: ImageComponent},
      {path: 'informationContact', component: InformationContactComponent},
    ]),
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule
    // GalleryModule.forRoot({
    //   // style: {
    //   //   height: '700px',
    //   //   width: '900px'
    //   // }
    // })
  ],
  providers: [ImagesService, MainPageService, ImageListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
