import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationWorkComponent } from './collaboration-work.component';

describe('CollaborationWorkComponent', () => {
  let component: CollaborationWorkComponent;
  let fixture: ComponentFixture<CollaborationWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborationWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborationWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
