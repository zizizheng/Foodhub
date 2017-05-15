import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDoneeComponent } from './page-donee.component';

describe('PageDoneeComponent', () => {
  let component: PageDoneeComponent;
  let fixture: ComponentFixture<PageDoneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDoneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDoneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
