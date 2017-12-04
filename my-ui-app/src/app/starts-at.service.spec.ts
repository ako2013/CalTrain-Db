import { TestBed, inject } from '@angular/core/testing';

import { StartsAtService } from './starts-at.service';

describe('StartsAtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StartsAtService]
    });
  });

  it('should be created', inject([StartsAtService], (service: StartsAtService) => {
    expect(service).toBeTruthy();
  }));
});
