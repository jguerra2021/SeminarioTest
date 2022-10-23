import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('(2) Prueba a "DataService"', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('Debe de crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

});
