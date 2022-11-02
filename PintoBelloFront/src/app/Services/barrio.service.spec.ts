import { TestBed } from '@angular/core/testing';

import { BarrioService } from './barrio.service';

describe('BarrioService', () => {
  let service: BarrioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarrioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
