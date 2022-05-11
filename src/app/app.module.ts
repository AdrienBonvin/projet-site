import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivitesModule } from './activites/activites.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import { NavbarModule } from './navbar/navbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { LogementsHomepageModule } from './logements-homepage/logements-homepage.module';
import { TourismeModule } from './tourisme/tourisme.module';


import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HomepageModule,
    ActivitesModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    BrowserAnimationsModule,
    LogementsHomepageModule,
    TourismeModule  ],
  providers: [MatDatepickerModule, MatIconModule, CommonModule,
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
