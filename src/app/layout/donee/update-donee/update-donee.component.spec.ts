import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDoneeComponent } from './update-donee.component';

describe('UpdateDoneeComponent', () => {
  let component: UpdateDoneeComponent;
  let fixture: ComponentFixture<UpdateDoneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDoneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDoneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
