import { TestBed, inject } from '@angular/core/testing';

import { FeriadoService } from './feriado.service';

describe('FeriadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeriadoService]
    });
  });

  it('should be created', inject([FeriadoService], (service: FeriadoService) => {
    expect(service).toBeTruthy();
  }));
});
