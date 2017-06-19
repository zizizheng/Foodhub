import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverFormComponent } from './deliver-form.component';

describe('DeliverFormComponent', () => {
  let component: DeliverFormComponent;
  let fixture: ComponentFixture<DeliverFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
