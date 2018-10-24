import { TestBed } from '@angular/core/testing';

import { AvengerService } from './avenger.service';

describe('AvengerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvengerService = TestBed.get(AvengerService);
    expect(service).toBeTruthy();
  });
});
