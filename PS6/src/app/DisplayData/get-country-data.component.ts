import {Component, Input, OnInit} from '@angular/core';
import { GetCovidDataByCountryService } from '../Services/get-covid-data-by-country.service';
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
  @Input() CountryDataByTime: CovidDataByTime[];
  @Input() isEmpty: boolean;
  CountryName: string;
  SelectedDate: CovidDataByTime;


  constructor(private CountryDataService: GetCovidDataByCountryService) { }

  ngOnInit(): void {
  }

  setSelectedDate(Date: CovidDataByTime): void {
    this.SelectedDate = Date;
  }

}
