import { TestBed } from '@angular/core/testing';

import { TecService } from './tec.service';

describe('TecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TecService = TestBed.get(TecService);
    expect(service).toBeTruthy();
  });
});
