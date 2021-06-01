import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaypalEditorialComponent } from './paypal-editorial.component';

describe('PaypalEditorialComponent', () => {
  let component: PaypalEditorialComponent;
  let fixture: ComponentFixture<PaypalEditorialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalEditorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
