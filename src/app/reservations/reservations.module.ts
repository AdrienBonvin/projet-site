import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReservationsComponent } from './reservations.component';



@NgModule({
  declarations: [
    ReservationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReservationsComponent
  ]
})
export class ReservationsModule { }
