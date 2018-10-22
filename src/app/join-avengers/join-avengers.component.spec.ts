import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAvengersComponent } from './join-avengers.component';

describe('JoinAvengersComponent', () => {
  let component: JoinAvengersComponent;
  let fixture: ComponentFixture<JoinAvengersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinAvengersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinAvengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
