import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationContactComponent } from './information-contact.component';

describe('InformationContactComponent', () => {
  let component: InformationContactComponent;
  let fixture: ComponentFixture<InformationContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
