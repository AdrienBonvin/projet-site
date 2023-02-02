import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FeaturePopupComponent } from 'src/app/common/feature-popup/feature-popup.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  @ViewChild('featurePopup', {static: false}) popup!: FeaturePopupComponent;

  telephonePortable: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(window.innerWidth < 700) {
      this.telephonePortable = true;
    }
  }

  goToAboutUs() {
    this.router.navigate(['/about-us']);
  }

}
