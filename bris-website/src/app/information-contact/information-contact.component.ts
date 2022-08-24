import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-contact',
  templateUrl: './information-contact.component.html',
  styleUrls: ['./information-contact.component.scss']
})
export class InformationContactComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
  }

  openResume(){
    window.open('/assets/img/OndrisBrianna_Resume_1.pdf', '_blank');
  }

  // sendemail(){

  // }
}
