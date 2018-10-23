import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengerDialogComponent } from './avenger-dialog.component';

describe('AvengerDialogComponent', () => {
  let component: AvengerDialogComponent;
  let fixture: ComponentFixture<AvengerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvengerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvengerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
