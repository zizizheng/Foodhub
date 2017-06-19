import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverDonationComponent } from './deliver-donation.component';

describe('DeliverDonationComponent', () => {
  let component: DeliverDonationComponent;
  let fixture: ComponentFixture<DeliverDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
