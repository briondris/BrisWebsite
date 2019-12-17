import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InformationContactComponent } from './information-contact/information-contact.component';
import { ImagesComponent } from './images/images';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageSelectedComponent } from './images/image-selected/image-selected.component';
import { MainPageAnimationComponent } from './main-page-animation/main-page-animation.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'image', component:ImagesComponent },
  { path: 'image/selected/:tag', component: ImageSelectedComponent},
  { path: 'list', component: ImageListComponent },
  { path: 'image/upload/23', component: ImageComponent},
  {path: 'informationContact', component: InformationContactComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
