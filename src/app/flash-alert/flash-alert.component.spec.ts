import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashAlertComponent } from './flash-alert.component';

describe('FlashAlertComponent', () => {
  let component: FlashAlertComponent;
  let fixture: ComponentFixture<FlashAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
