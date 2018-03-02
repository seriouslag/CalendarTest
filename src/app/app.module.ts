
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { CalendarCellComponent } from './components/calendar-cell/calendar-cell.component';
import { CalendarPickerComponent } from './components/dialogs/calendar-picker/calendar-picker.component';
import { MaterialModule } from './modules/app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {HttpClientModule} from '@angular/common/http';
import {FileService} from './services/file.service';
import { HolidayDialogComponent } from './components/dialogs/holiday-dialog/holiday-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarCellComponent,
    CalendarPickerComponent,
    ContactPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    HolidayDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule
  ],
  exports: [
    FormsModule, ReactiveFormsModule
  ],
  providers: [FileService],
  entryComponents: [CalendarPickerComponent, HolidayDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
