import {Component, Inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CountryCode} from '../../../interface/countryCode';

@Component({
  selector: 'app-calendar-picker',
  templateUrl: './calendar-picker.component.html',
  styleUrls: ['./calendar-picker.component.css']
})
export class CalendarPickerComponent implements OnInit, OnChanges {

  calData: any;

  countryCodes: CountryCode[];

  calForm = new FormGroup({
    startDate: new FormControl((this.calData ? this.calData.startDate : null), [Validators.required]),
    numberOfDays: new FormControl((this.calData ? this.calData.numberOfDays : null), [
      Validators.compose([Validators.required, CalendarPickerComponent.nonZero])
    ]),
    countryCode: new FormControl((this.calData ? this.calData.countryCode : null), []),
  });

  static nonZero(control: any): { [key: string]: any; } {
    if (Number(control.value) < 0) {
      return {nonZero: true};
    } else {
      return null;
    }
  }

  constructor(public dialogRef: MatDialogRef<CalendarPickerComponent>, @Inject(MAT_DIALOG_DATA) private dialogData: any) { }

  public ngOnInit(): void {

    if (this.dialogData) {
      this.calData = this.dialogData;
      this.setData();
    }
  }
  public ngOnChanges(changes: SimpleChanges): void {
      if (this.dialogData) {
        this.calData = this.dialogData;
        this.setData();
      }
  }

  private setData() {
    this.calForm.controls['startDate'].patchValue(this.calData.startDate);
    this.calForm.controls['numberOfDays'].patchValue(this.calData.numberOfDays);
    this.calForm.controls['countryCode'].patchValue(this.calData.countryCode);
  }

  public close() {
    this.dialogRef.close(this.calForm.getRawValue());
  }

  public getCountryCodes(str) {
    this.countryCodes = this.calData['fileService'].getCountryCode(str.target.value).sort();
  }

}
