import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Holiday} from "../interface/holiday";
import {CountryCode} from "../interface/countryCode";

@Injectable()
export class FileService {

  holidayData: Holiday[];
  countryCodeData: CountryCode[];

  constructor(private http: HttpClient) {
    this.http.get<Holiday[]>('../assets/holidays.json')
      .subscribe(holidays => {
        this.holidayData = holidays;
      });
    this.http.get<CountryCode[]>('../assets/countrycodes.json')
      .subscribe(countryCode => {
        this.countryCodeData = countryCode;
      });
  }


  getHoliday(date: string): Holiday[] {
    return this.holidayData.filter(holiday => holiday.date === date);
  }

  getCountryCode(code: string): CountryCode[] {
    return this.countryCodeData.filter(countryCodeData => countryCodeData.Code.indexOf(code) > -1)
  }
}
