import { TestBed, inject } from '@angular/core/testing';

import { PosSystemService } from './pos-system.service';

describe('PosSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PosSystemService]
    });
  });

  it('should be created', inject([PosSystemService], (service: PosSystemService) => {
    expect(service).toBeTruthy();
  }));
});
