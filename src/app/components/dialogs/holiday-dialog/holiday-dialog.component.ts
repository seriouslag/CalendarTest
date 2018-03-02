import {Component, Inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Holiday} from "../../../interface/holiday";

@Component({
  selector: 'app-holiday-dialog',
  templateUrl: './holiday-dialog.component.html',
  styleUrls: ['./holiday-dialog.component.css']
})
export class HolidayDialogComponent implements OnInit, OnChanges {

  public holiday: Holiday;

  constructor(public dialogRef: MatDialogRef<HolidayDialogComponent>, @Inject(MAT_DIALOG_DATA) private dialogData: any) { }

  public ngOnInit(): void {
    if(this.dialogData) {
      this.holiday = this.dialogData;
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if(this.dialogData) {
      this.holiday = this.dialogData;
    }
  }

  public close() {
    this.dialogRef.close();
  }
}
