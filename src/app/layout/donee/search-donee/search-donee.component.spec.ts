import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDoneeComponent } from './search-donee.component';

describe('SearchDoneeComponent', () => {
  let component: SearchDoneeComponent;
  let fixture: ComponentFixture<SearchDoneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDoneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDoneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
