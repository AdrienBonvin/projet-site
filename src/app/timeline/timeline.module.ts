import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ], exports: [
    TimelineComponent
  ]
})
export class TimelineModule { }
