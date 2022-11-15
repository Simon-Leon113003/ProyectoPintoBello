import { TestBed } from '@angular/core/testing';

import { EstadoNavService } from './estado-nav.service';

describe('EstadoNavService', () => {
  let service: EstadoNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
