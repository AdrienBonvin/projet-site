import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../navbar/navbar.module';
import { HomepageComponent } from './homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SocialproofComponent } from './socialproof/socialproof.component';
import { LogementsComponent } from './logements/logements.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BookingbarModule } from '../bookingbar/bookingbar.module';
import { CustomCommonModule } from '../common/custom-common.module';



@NgModule({
  declarations: [
    HomepageComponent,
    SocialproofComponent,
    LogementsComponent,
    IntroductionComponent,
    AboutusComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    BookingbarModule,
    CustomCommonModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
