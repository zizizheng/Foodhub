import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDonationComponent } from './export-donation.component';

describe('ExportDonationComponent', () => {
  let component: ExportDonationComponent;
  let fixture: ComponentFixture<ExportDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
