
import {
  MatProgressSpinnerModule, MatRippleModule, MatSelectModule,
  MatSliderModule, MatToolbarModule, MatTooltipModule,
  MatButtonModule, MatCardModule, MatDialogModule,
  MatIconModule, MatInputModule, MatOptionModule, MatDatepickerModule,
  MatAutocompleteModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

import {FlexLayoutModule} from '@angular/flex-layout';

import {NgModule} from '@angular/core';


@NgModule({
  imports: [
    FlexLayoutModule, MatButtonModule, MatCardModule, MatDialogModule,
    MatIconModule, MatInputModule, MatOptionModule, MatProgressSpinnerModule,
    MatRippleModule, MatSelectModule, MatSliderModule, MatMomentDateModule, MatTooltipModule, MatToolbarModule,
    BrowserAnimationsModule, MatDatepickerModule, MatAutocompleteModule
  ],
  exports: [
    FlexLayoutModule, MatButtonModule, MatCardModule, MatDialogModule,
    MatIconModule, MatInputModule, MatOptionModule, MatProgressSpinnerModule,
    MatRippleModule, MatSelectModule, MatSliderModule, MatMomentDateModule, MatTooltipModule, MatToolbarModule,
    BrowserAnimationsModule, MatDatepickerModule, MatAutocompleteModule
  ]
})

export class MaterialModule {
}


