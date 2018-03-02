import { Component, OnInit } from '@angular/core';
import {CalendarPickerComponent} from "../../components/dialogs/calendar-picker/calendar-picker.component";
import {MatDialog, MatDialogRef} from "@angular/material";
import {CalData} from "../../interface/cal-data";
import {Moment} from "moment";
import * as moment from 'moment';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Year} from "../../interface/year";
import {Day} from "../../interface/day";
import {FileService} from "../../services/file.service";
import {Month} from "../../interface/month";
import {MonthsOfYear} from "../../interface/enums";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  calPickerDialogRef: MatDialogRef<CalendarPickerComponent>;

  dates$: BehaviorSubject<Year[]> = new BehaviorSubject<Year[]>(null);

  calData: CalData;

  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private dialog: MatDialog, private fileService: FileService) { }

  ngOnInit() {
  }

  numToMonth(num: number): string {
    switch (num) {
      case MonthsOfYear.January:
        return "January";
      case MonthsOfYear.February:
        return "February";
      case MonthsOfYear.March:
        return "March";
      case MonthsOfYear.April:
        return "April";
      case MonthsOfYear.May:
        return "May";
      case MonthsOfYear.June:
        return "June";
      case MonthsOfYear.July:
        return "July";
      case MonthsOfYear.August:
        return "August";
      case MonthsOfYear.September:
        return "September";
      case MonthsOfYear.October:
        return "October";
      case MonthsOfYear.November:
        return "November";
      case MonthsOfYear.December:
        return "December";
      default:
        return "";
    }
}

  public openCalPickerDialog(): void {
    let calData = (this.calData != null ? this.calData : {});
    calData['fileService'] = this.fileService;
    this.calPickerDialogRef = this.dialog.open(CalendarPickerComponent, {
      data: calData
    });
    this.calPickerDialogRef.afterClosed().subscribe(calData => {
      this.calData = calData;
      this.getMonthYearsFromCalData()
    })
  }

  private getMonthYearsFromCalData() {

    if(this.calData) {
      this.loading$.next(true);
      // Set init moment
      let startDate: Moment = (this.calData.startDate);
      let date = startDate.clone();
      // clone then add days
      let endDate = date.clone();
      endDate = endDate.add(this.calData.numberOfDays, 'day');

      // add every day to array

      let startYear: number = startDate.year();
      let endYear: number = endDate.year();
      let startMonth: number = startDate.month() + 1;
      let endMonth: number = endDate.month() + 1;
      let startDay: number = startDate.date();
      let endDay: number = endDate.date();

      // years
      let years: Year[] = [];
      if(this.calData.numberOfDays > 1 ) {
        for (let y = startYear; y <= endYear; y++) {

          // months
          let months: Month[] = [];
          for (let m = (y === startYear ? startMonth : 1); ((m <= 12) && !(y == endYear && m == endMonth)); m++) {
            // days
            let days: Day[] = [];
            for (let d = ((y === startYear && m === startMonth) ? startDay : 1); ((d <= moment("2012-" + (m < 10 ? "0" + m : m), "YYYY-MM").daysInMonth()) && !(y === endYear && m === endMonth && d === endDay)); d++) {
              let day = moment('' + startYear + "-" + (m < 10 ? "0" + m : m) + '-' +(d < 10 ? "0" + d : d), "YYYY-MM-DD").clone();

              if(d == 1 || (startYear === y && startMonth === m && startDay === d)) {

                // add spacers before
                for (let w = 0; w < day.weekday(); w++) {
                  days.push(<Day>{
                    num: 0,
                    date: null,
                    holidays: null
                  });
                }
              }

              days.push(<Day>{
                num: d,
                date: day,
                holidays: this.fileService.getHoliday(day.format("YYYY-MM-DD"))
              });


              // add spacers after
              if((d == day.daysInMonth() && day.weekday() < 6) || (d === (endDay -1) && m == endMonth && y == endYear && day.weekday() < 6)) {
                for(let q = day.weekday(); q < 6; q++) {
                  days.push(<Day>{
                    num: 0,
                    date: null,
                    holidays: null
                  });
                }
              }
            }

            months.push(<Month>{days: days, name: this.numToMonth(m), startDay: days[0]});
          }

          years.push(<Year>{months: months, num: y});
          y++;
        }
      } else {
        let date = moment('' + startYear + "-" + (startMonth < 10 ? "0" + startMonth : startMonth) + '-' +(startDay < 10 ? "0" + startDay : startDay), "YYYY-MM-DD").clone();
        let days: Day[] = [<Day>{num: startDay, date: date, holidays: this.fileService.getHoliday(date.format("YYYY-MM-DD"))}];
        let months: Month[] = [<Month>{days: days, name: this.numToMonth(startMonth)}];
        years.push(<Year>{months: months, num: startYear });
      }

      this.dates$.next(years);
      this.loading$.next(false);
    }
  }
}
