import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCovidDataByCountryService {

  constructor(private BackendClient: HttpClient) { }

  getCountryData(): Observable<any> {
    return this.BackendClient.get('http://localhost:3000/ps4',
      {observe: 'body', responseType: 'json'});
  }
}
