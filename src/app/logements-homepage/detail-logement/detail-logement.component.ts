import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Images } from 'src/app/common/enum/images';
import { FeaturePopupComponent } from 'src/app/common/feature-popup/feature-popup.component';
@Component({
  selector: 'app-detail-logement',
  templateUrl: './detail-logement.component.html',
  styleUrls: ['./detail-logement.component.css']
})
export class DetailLogementComponent implements OnInit, OnChanges {

  @Input()
  typeLogement!: string;

  @ViewChild('featurePopup', {static: false}) popup!: FeaturePopupComponent;

  constructor() { }

  titre: string = "";
  paragraphe: string = "";
  linkToAssets: string = "../";
  img_carousel_1: string = "";
  img_carousel_2: string = "";
  img_carousel_3: string = "";
  telephonePortable: boolean = false;
  tailleColCaracteristiques: number = 2;

  ngOnInit(): void {
    if(window.innerWidth < 700) {
      this.telephonePortable = true;
      this.tailleColCaracteristiques = 4;
    }
    this.chargePageContent();
    }

  ngOnChanges(changes: SimpleChanges) {
    this.chargePageContent();
  }

  chargePageContent () {
    switch(this.typeLogement) {
      case 'insolite' :
        this.titre = "Logements insolites";
        this.paragraphe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        this.img_carousel_1 = this.linkToAssets + Images.logement_yourt_in;
        this.img_carousel_2 = this.linkToAssets + Images.logement_yourt_out;
        this.img_carousel_3 = this.linkToAssets + Images.logement_bulle_out;
        break;
      case 'camping-car' :
        this.titre = "Emplacement camping-car";
        this.paragraphe = "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";
        this.img_carousel_1 = this.linkToAssets + Images.logement_camping_car;
        this.img_carousel_2 = this.linkToAssets + Images.logement_camping_car_homepage;
        this.img_carousel_3 = this.linkToAssets + Images.logement_gite_out;
        break;
      case 'gite' :
        this.titre = "Location gite";
        this.paragraphe = "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";
        this.img_carousel_1 = this.linkToAssets + Images.logement_gite_out;
        this.img_carousel_2 = this.linkToAssets + Images.logement_gite_in;
        this.img_carousel_3 = this.linkToAssets + Images.logement_gite_out;
        break;
    }
  }

  reservation() {
    let text = "Au clic sur le bouton 'Reservez ce logement', l'application enverra un mail à la boite mail de la lezardiere. Plus tard une section pourrait s'ouvrir avec le choix des dates, ainsi que le choix des prestations sous forme de cases à cocher si vous souhaiterez en faire, par exemple [ ] pannier repas avec bouteille de champagne (+25€), [ ] décoration florale de la chambre (+10€)"
    this.popup.open(text);
  }

}
