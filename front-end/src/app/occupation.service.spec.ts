import { TestBed } from '@angular/core/testing';

import { OccupationService } from './occupation.service';

describe('OccupationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OccupationService = TestBed.get(OccupationService);
    expect(service).toBeTruthy();
  });
});
