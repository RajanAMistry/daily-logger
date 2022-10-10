import { TestBed } from '@angular/core/testing';

import { DailyLoggerService } from './daily-logger.service';

describe('DailyLoggerService', () => {
  let service: DailyLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
