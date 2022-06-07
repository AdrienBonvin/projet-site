import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivitesModule } from './activites/activites.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import { NavbarModule } from './navbar/navbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { LogementsHomepageModule } from './logements-homepage/logements-homepage.module';
import { TourismeModule } from './tourisme/tourisme.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BookingbarModule } from './bookingbar/bookingbar.module';
import { FooterModule } from './footer/footer.module';
import { ReservationModule } from './reservation/reservation.module';
import { TimelineModule } from './timeline/timeline.module';
import { AboutusComponent } from './homepage/aboutus/aboutus.component';
import { AboutUsModule } from './about-us/about-us.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,

    AppRoutingModule,
    NavbarModule,
    HomepageModule,
    ActivitesModule,
    LogementsHomepageModule,
    TourismeModule,
    BookingbarModule,
    FooterModule,
    ReservationModule,
    TimelineModule,
    AboutUsModule
    ],
  providers: [
    MatDatepickerModule,
    MatIconModule,
    CommonModule,
    BookingbarModule,
    FooterModule,
    ReservationModule,
    LogementsHomepageModule,
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'fr-FR'
    },
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
