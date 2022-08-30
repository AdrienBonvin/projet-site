import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FeaturePopupComponent } from '../common/feature-popup/feature-popup.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],

})
export class HomepageComponent implements OnInit {
  tailleEcran!: string;
  telephonePortable: boolean = false;
  isScrolledToTop: string = '0%';

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 10) {
      this.isScrolledToTop = '100%';
    } else {
      this.isScrolledToTop = '0%';
    }
  }

constructor() { }

  ngOnInit(): void {
    this.tailleEcran = window.innerHeight + 'px';

    if(window.innerWidth < 700) {
      this.telephonePortable = true;
    }
  }
}
