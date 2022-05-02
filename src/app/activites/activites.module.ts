import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitesComponent } from './activites.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    ActivitesComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ActivitesComponent
  ]
})
export class ActivitesModule { }
