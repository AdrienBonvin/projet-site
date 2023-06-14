import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-feature-popup',
  templateUrl: './feature-popup.component.html',
  styleUrls: ['./feature-popup.component.css']
})
export class FeaturePopupComponent {

  @ViewChild('featurePopup', {static: false}) popup!: ElementRef;

  open() {
    this.popup.nativeElement.style.display = 'flex';
  }

  validation() {
    this.popup.nativeElement.style.display = 'none';
  }

  close() {
    this.popup.nativeElement.style.display = 'none';
  }
}


