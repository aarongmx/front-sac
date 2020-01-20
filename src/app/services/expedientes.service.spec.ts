import { TestBed } from '@angular/core/testing';

import { ExpedientesService } from './expedientes.service';

describe('ExpedientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpedientesService = TestBed.get(ExpedientesService);
    expect(service).toBeTruthy();
  });
});
