import { TestBed } from '@angular/core/testing';

import { GetCovidDataByCountryService } from './get-covid-data-by-country.service';

describe('GetCovidDataByCountryService', () => {
  let service: GetCovidDataByCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCovidDataByCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
