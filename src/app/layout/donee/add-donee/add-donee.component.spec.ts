import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoneeComponent } from './add-donee.component';

describe('AddDoneeComponent', () => {
  let component: AddDoneeComponent;
  let fixture: ComponentFixture<AddDoneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDoneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
