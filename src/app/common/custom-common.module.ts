import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePopupComponent } from './feature-popup/feature-popup.component';
import { SocialProofCommentComponent } from './social-proof-comment/social-proof-comment.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    FeaturePopupComponent,
    SocialProofCommentComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    FeaturePopupComponent,
    SocialProofCommentComponent
  ]
})
export class CustomCommonModule { }
