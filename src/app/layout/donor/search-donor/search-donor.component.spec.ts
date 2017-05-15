import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDonorComponent } from './search-donor.component';

describe('SearchDonorComponent', () => {
  let component: SearchDonorComponent;
  let fixture: ComponentFixture<SearchDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
