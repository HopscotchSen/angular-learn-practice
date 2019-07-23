import { TestBed } from '@angular/core/testing';

import { PhonePipeService } from './phone.pipe';

describe('PhonePipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhonePipeService = TestBed.get(PhonePipeService);
    expect(service).toBeTruthy();
  });
});
