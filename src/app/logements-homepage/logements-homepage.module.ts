import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../navbar/navbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { LogementsHomepageComponent } from './logements-homepage.component';
import { CampingCarComponent } from './camping-car/camping-car.component';
import { GiteComponent } from './gite/gite.component';
import { InsoliteComponent } from './insolite/insolite.component';
import { BookingbarModule } from '../bookingbar/bookingbar.module';



@NgModule({
  declarations: [
    LogementsHomepageComponent,
    CampingCarComponent,
    GiteComponent,
    InsoliteComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    BookingbarModule
    ],
  exports: [
    LogementsHomepageComponent
  ]
})
export class LogementsHomepageModule { }