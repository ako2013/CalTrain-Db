import { TestBed, inject } from '@angular/core/testing';

import { NextStationService } from './next-station.service';

describe('NextStationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NextStationService]
    });
  });

  it('should be created', inject([NextStationService], (service: NextStationService) => {
    expect(service).toBeTruthy();
  }));
});
