import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDonorComponent } from './page-donor.component';

describe('PageDonorComponent', () => {
  let component: PageDonorComponent;
  let fixture: ComponentFixture<PageDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
