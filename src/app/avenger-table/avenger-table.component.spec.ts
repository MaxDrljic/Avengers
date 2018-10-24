import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengerTableComponent } from './avenger-table.component';

describe('AvengerTableComponent', () => {
  let component: AvengerTableComponent;
  let fixture: ComponentFixture<AvengerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvengerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvengerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
