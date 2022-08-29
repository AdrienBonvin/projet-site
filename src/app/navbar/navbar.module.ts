import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomCommonModule } from '../common/custom-common.module';
import { NavbarComponent } from './navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CustomCommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
