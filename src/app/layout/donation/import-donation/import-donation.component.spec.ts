import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDonationComponent } from './import-donation.component';

describe('ImportDonationComponent', () => {
  let component: ImportDonationComponent;
  let fixture: ComponentFixture<ImportDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
