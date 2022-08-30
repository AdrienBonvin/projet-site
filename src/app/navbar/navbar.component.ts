import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FeaturePopupComponent } from '../common/feature-popup/feature-popup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('featurePopup', {static: false}) popup!: FeaturePopupComponent;

  topOfScreen: boolean = true;
  color: string = "";
  gold: string = "#a69667";
  white: string = "#ffffff";
  fontColor: string = "#000000"
  pathLogo: string = "../../assets/images/logo.png"

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goToReservations(){
    this.router.navigate(['/reservations']);
  }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 10) {
      this.topOfScreen = false;
      this.color =  this.gold;
      this.fontColor = "#000000"
      this.pathLogo = "../../assets/images/logo_gold.png"
    } else {
      this.topOfScreen = true;
      this.color =  this.white;
      this.fontColor = "#000000"
      this.pathLogo = "../../assets/images/logo.png"
      //this.color = "rgba(255, 255, 255, 0.55)";
    }
  }

  changeLanguage() {
  }

  reservation () {
    let text = "Au clic sur le bouton de réservation, la page affichera une selection du type de logement, ainsi qu'un calendrier contenant les dates réservables et les dates déjà réservées."
    this.popup.open(text);
  }

}
