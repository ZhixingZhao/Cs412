import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCountryDataComponent } from './get-country-data.component';

describe('GetCountryDataComponent', () => {
  let component: GetCountryDataComponent;
  let fixture: ComponentFixture<GetCountryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCountryDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCountryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
