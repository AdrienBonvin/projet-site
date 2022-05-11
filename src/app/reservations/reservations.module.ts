import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReservationsComponent } from './reservations.component';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
  ],
  exports: [
    ReservationsComponent
  ]
})
export class ReservationsModule { }
