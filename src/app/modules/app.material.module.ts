
import {
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule ,
  MatOptionModule, MatDatepickerModule, MatAutocompleteModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

import {FlexLayoutModule} from '@angular/flex-layout';

import {NgModule} from '@angular/core';


@NgModule({
  imports: [
    FlexLayoutModule, MatButtonModule, MatCardModule, MatDialogModule,
    MatIconModule, MatInputModule, MatMenuModule, MatOptionModule, MatProgressSpinnerModule,
    MatRippleModule, MatSelectModule, MatSliderModule, MatMomentDateModule ,
    MatSnackBarModule, MatTabsModule, MatTooltipModule, MatToolbarModule,
    BrowserAnimationsModule, MatDatepickerModule, MatAutocompleteModule
  ],
  exports: [
    FlexLayoutModule, MatButtonModule, MatCardModule, MatDialogModule,
    MatIconModule, MatInputModule, MatMenuModule, MatOptionModule, MatProgressSpinnerModule,
    MatRippleModule, MatSelectModule, MatSliderModule, MatMomentDateModule ,
    MatSnackBarModule, MatTabsModule, MatTooltipModule, MatToolbarModule,
    BrowserAnimationsModule, MatDatepickerModule, MatAutocompleteModule
  ]
})

export class MaterialModule {
}


