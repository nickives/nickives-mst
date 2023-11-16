import { TestBed } from '@angular/core/testing';

import { MstDataService } from './mst-data.service';

describe('MstDataService', () => {
  let service: MstDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MstDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
