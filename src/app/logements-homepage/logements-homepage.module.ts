import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../navbar/navbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { LogementsHomepageComponent } from './logements-homepage.component';
import { BookingbarModule } from '../bookingbar/bookingbar.module';
import { GiteComponent } from './gite/gite.component';
import { CustomCommonModule } from '../common/custom-common.module';




@NgModule({
  declarations: [
    LogementsHomepageComponent,
    GiteComponent,
  ],
  imports: [
    CommonModule,
    CustomCommonModule,
    NavbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    BookingbarModule
    ],
  exports: [
    LogementsHomepageComponent,
    GiteComponent
  ]
})
export class LogementsHomepageModule { }
