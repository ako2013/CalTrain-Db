import { TestBed, inject } from '@angular/core/testing';

import { EndsAtService } from './ends-at.service';

describe('EndsAtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EndsAtService]
    });
  });

  it('should be created', inject([EndsAtService], (service: EndsAtService) => {
    expect(service).toBeTruthy();
  }));
});
