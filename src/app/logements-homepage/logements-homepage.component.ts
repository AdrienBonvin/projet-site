import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logements-homepage',
  templateUrl: './logements-homepage.component.html',
  styleUrls: ['./logements-homepage.component.css']
})
export class LogementsHomepageComponent implements OnInit {

  typeLogement: string ="";
  tailleEcran: string = "";
  isScrolledToTop: string = '0%';
  telephonePortable: boolean = false;

  // Affichage des icones-cards
  isHoverCampingCar = false;
  isHoverGite = false;
  isHoverInsolite = false;

  constructor(private router: Router) { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 10) {
      this.isScrolledToTop = '100%';
    } else {
      this.isScrolledToTop = '0%';
    }
  }

  ngOnInit(): void {
    this.tailleEcran = window.innerHeight + 'px';

    if(window.innerWidth < 700) {
      this.telephonePortable = true;
    }
  }

  goBackToLogementHomepage () {
    this.typeLogement = "";
  }

  goToElement(typeLogement: string){
    document.getElementById(typeLogement)!.scrollIntoView();

  }
}
