import { TestBed } from '@angular/core/testing';

import { FormasPagoService } from './formas-pago.service';

describe('FormasPagoService', () => {
  let service: FormasPagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormasPagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
