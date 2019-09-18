import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MainPageComponent } from './main-page/main-page.component';
import { ArtWorkComponent } from './art-work/art-work.component';
import { CollaborationWorkComponent } from './collaboration-work/collaboration-work.component';
import { InformationContactComponent } from './information-contact/information-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainPageComponent,
    ArtWorkComponent,
    CollaborationWorkComponent,
    InformationContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'artwork', component: ArtWorkComponent},
      {path: 'collaboration', component: CollaborationWorkComponent},
      {path: 'informationContact', component: InformationContactComponent},
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
