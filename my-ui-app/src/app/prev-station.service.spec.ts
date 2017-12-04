import { TestBed, inject } from '@angular/core/testing';

import { PrevStationService } from './prev-station.service';

describe('PrevStationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrevStationService]
    });
  });

  it('should be created', inject([PrevStationService], (service: PrevStationService) => {
    expect(service).toBeTruthy();
  }));
});
