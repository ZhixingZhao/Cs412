import { Component, OnInit } from '@angular/core';
import { USCoviddata } from './Data/UnitedStates';
import { CovidDataByTime } from './Data/datatype';
import { GetCovidDataByCountryService } from './Services/get-covid-data-by-country.service';

interface CountryData {
  name: string;
  timeline: [];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Covid-19 Data';
  CountryName: string;
  CountryDataByTime: CovidDataByTime[];
  SelectedDate: CovidDataByTime;
  isEmpty = true;

  ngOnInit(): void {
  }
  constructor(private CountryDataService: GetCovidDataByCountryService) { }

  setSelectedDate(Date: CovidDataByTime): void {
    this.SelectedDate = Date;
  }

  getCountryData(): void{
    this.CountryDataService.getCountryData(this.CountryName).subscribe(
      (response: CountryData) => {
        this.CountryName = response.name;
        this.CountryDataByTime = response.timeline.slice(1);
      }
    );
  }
  IsEmpty(): boolean {
    return this.isEmpty;
  }

  getCountryName(countrynameinput: any): void {
    this.isEmpty = false;
    this.CountryName = countrynameinput.value;
  }
}
