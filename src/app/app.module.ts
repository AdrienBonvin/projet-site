import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import { NavbarModule } from './navbar/navbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { LogementsHomepageModule } from './logements-homepage/logements-homepage.module';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BookingbarModule } from './bookingbar/bookingbar.module';
import { FooterModule } from './footer/footer.module';
import { TimelineModule } from './timeline/timeline.module';
import { AboutUsModule } from './about-us/about-us.module';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);



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
    LogementsHomepageModule,
    BookingbarModule,
    FooterModule,
    TimelineModule,
    AboutUsModule,
    ],
  providers: [
    MatDatepickerModule,
    MatIconModule,
    CommonModule,
    BookingbarModule,
    FooterModule,
    LogementsHomepageModule,
    DatePipe,
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
