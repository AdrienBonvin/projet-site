import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-feature-popup',
  templateUrl: './feature-popup.component.html',
  styleUrls: ['./feature-popup.component.css']
})
export class FeaturePopupComponent implements OnInit {

  @ViewChild('featurePopup', {static: false}) popup!: ElementRef;

  text: string= "";

  ngOnInit(): void {
  }

  open(text: string) {
    this.popup.nativeElement.style.display = 'flex';
    this.text=text;
  }

  close() {
    this.popup.nativeElement.style.display = 'none';
    this.text="";
  }
}


