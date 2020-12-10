import { Component, OnInit } from '@angular/core';
import { USCoviddata } from './Data/UnitedStates';
import { CovidDataByTime} from './Data/datatype';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Covid-19 Data';
  CountryName: string;
  UsData: CovidDataByTime[] = USCoviddata;
  SelectedDate: CovidDataByTime;
  isEmpty = true;

  ngOnInit(): void {
  }

  setSelectedDate(Date: CovidDataByTime): void {
    this.SelectedDate = Date;
  }

  CheckIfIsUs(): boolean {
    if (this.CountryName === 'United States'){
      return true;
    }else{
      return false;
    }
  }
  IsEmpty(): boolean {
    return this.isEmpty;
  }

  getCountryName(countrynameinput: any): void {
    this.isEmpty = false;
    this.CountryName = countrynameinput.value;
  }
}
