import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaypalnotificationComponent } from './paypalnotification.component';

describe('PaypalnotificationComponent', () => {
  let component: PaypalnotificationComponent;
  let fixture: ComponentFixture<PaypalnotificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalnotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
