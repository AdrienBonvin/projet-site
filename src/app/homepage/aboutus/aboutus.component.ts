import { Component, OnInit, ViewChild } from '@angular/core';
import { FeaturePopupComponent } from 'src/app/common/feature-popup/feature-popup.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  @ViewChild('featurePopup', {static: false}) popup!: FeaturePopupComponent;

  telephonePortable: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth < 700) {
      this.telephonePortable = true;
    }
  }

  goToAboutUs() {
    let text = "Au clic sur le bouton 'En savoir plus...', afficher une page sur la famille Dubuisson, sur vous deux, sur votre maison, les alentours, ou tout simplement mettre tout ça dans la page 'Qui Sommes Nous ?' dans le menu en haut et renvoyer à cette page"
    this.popup.open(text);
  }

}
