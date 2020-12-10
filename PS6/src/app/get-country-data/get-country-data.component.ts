import { Component, OnInit } from '@angular/core';
import {GetCovidDataByCountryService} from '../Services/get-covid-data-by-country.service';
import { CovidDataByTime } from '../Data/datatype';

interface CountryData {
  name: string;
  timeline: [];
}

@Component({
  selector: 'app-get-country-data',
  templateUrl: './get-country-data.component.html',
  styleUrls: ['./get-country-data.component.css']
})
export class GetCountryDataComponent implements OnInit {
  CountryName: string;
  CountryDataByTime: CovidDataByTime[];
  SelectedDate: CovidDataByTime;


  constructor(private CountryDataService: GetCovidDataByCountryService) { }

  ngOnInit(): void {
  }
  getCountryData(): void{
    this.CountryDataService.getCountryData().subscribe(
      (response: CountryData) => {
        this.CountryName = response.name;
        this.CountryDataByTime = response.timeline.slice(1);
      }
    );
  }
  setSelectedDate(Date: CovidDataByTime): void {
    this.SelectedDate = Date;
  }

}
