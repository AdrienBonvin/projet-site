import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePopupComponent } from './feature-popup/feature-popup.component';



@NgModule({
  declarations: [
    FeaturePopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeaturePopupComponent
  ]
})
export class CustomCommonModule { }
