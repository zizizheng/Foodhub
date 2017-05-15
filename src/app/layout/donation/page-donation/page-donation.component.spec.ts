import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDonationComponent } from './page-donation.component';

describe('PageDonationComponent', () => {
  let component: PageDonationComponent;
  let fixture: ComponentFixture<PageDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
