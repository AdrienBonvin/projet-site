import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FeaturePopupComponent } from 'src/app/common/feature-popup/feature-popup.component';

@Component({
  selector: 'app-logements',
  templateUrl: './logements.component.html',
  styleUrls: ['./logements.component.css']
})
export class LogementsComponent implements OnInit {

  @ViewChild('featurePopup', {static: false}) popup!: FeaturePopupComponent;

  isHoverCampingCar = false;
  isHoverGite = false;
  isHoverInsolite = false;
  telephonePortable: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(window.innerWidth < 700) {
      this.telephonePortable = true;
    }
  }

  goToReservations(typeLogement: String){
    let text = "Au clic sur une des cartes de réservation, l'application affichera la page de réservation du logement souhaité avec les détails de celui-ci, ainsi qu'un bouton permettant de réserver ce logement."
    this.popup.open(text);
    /*
    switch(typeLogement) {
      case 'insolite' :
        this.router.navigate(['/insolite']);
        break;
      case 'camping-car' :
        this.router.navigate(['/camping-car']);
        break;
      case 'gite' :
        this.router.navigate(['/gite']);
        break;

    }*/
  }
}
