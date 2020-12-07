import { Component, OnInit } from '@angular/core';
import { USCoviddata } from './Data/UnitedStates';
import { CovidData } from './Data/datatype';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Covid-19 Data';
  CountryName: string;
  UsData: CovidData[] = USCoviddata;
  SelectedDate: CovidData;
  isEmpty = true;

  ngOnInit(): void {
  }

  setSelectedDate(Date: CovidData): void {
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
