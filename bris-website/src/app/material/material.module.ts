import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule
} from '@angular/material';

const MaterialComponents =  [
  MatButtonModule,
  MatButtonToggleModule,
  MatSidenavModule
];

@NgModule({
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
  ]
})
export class MaterialModule { }
