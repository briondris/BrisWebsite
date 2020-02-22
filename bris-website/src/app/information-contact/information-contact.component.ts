import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-information-contact',
  templateUrl: './information-contact.component.html',
  styleUrls: ['./information-contact.component.scss']
})
export class InformationContactComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  openResume(){
    window.open('/assets/img/OndrisBrianna_Resume_.pdf', '_blank');
  }

  // sendemail(){

  // }
}
