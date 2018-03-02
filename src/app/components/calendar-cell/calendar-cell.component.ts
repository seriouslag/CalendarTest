import {Component, Input, OnInit} from '@angular/core';
import {Day} from "../../interface/day";
import {MatDialog, MatDialogRef} from "@angular/material";
import {HolidayDialogComponent} from "../dialogs/holiday-dialog/holiday-dialog.component";
import {Holiday} from "../../interface/holiday";

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.css']
})
export class CalendarCellComponent implements OnInit {

  @Input()
  day: Day;

  public color = "green";

  private holidayDialogRef: MatDialogRef<HolidayDialogComponent>;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {

    if (this.day.date != null) {

      if (this.day.date.weekday() == 0 || this.day.date.weekday() == 6) {
        this.color = "yellow";
      }

      if (this.day.holidays.length > 0) {
        this.color = "#00e4ff"
      }

      if (this.day.num == 0) {
        this.color = "gray";
      }
    } else {
      this.color = "gray";
    }
  }

  public openHolidayDialog(holiday: Holiday): void  {
    this.holidayDialogRef = this.dialog.open(HolidayDialogComponent, {
      data: holiday
    });
  }

}
