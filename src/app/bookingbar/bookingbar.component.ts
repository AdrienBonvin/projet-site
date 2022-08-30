import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common'
import { FeaturePopupComponent } from '../common/feature-popup/feature-popup.component';

@Component({
  selector: 'app-bookingbar',
  templateUrl: './bookingbar.component.html',
  styleUrls: ['./bookingbar.component.css']
})
export class BookingbarComponent implements OnInit {

  @ViewChild('featurePopup', {static: false}) popup!: FeaturePopupComponent;

  logementSelectionne!: string;
  datesSelectionnees!: Date;
  nombrePersonnes!: number;
  mailText:string = "";
  startDate!: Date;
  endDate!: Date;
  telephonePortable: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth < 700) {
      this.telephonePortable = true;
    }
  }


  ouvrirMailReservation(){
    // Reussir a utiliser DatePipe pour reformater, sans faire Ecran Blanc, puis Commit !
    let text = "Au clic sur le bouton de réservation : actuellement un mail s'envoie avec les informations, qui peuvent être modifiés par le client. Par la suite, il sera fait un mail qui n'est absolument pas modifiable par le client pour avoir une certaine homogénéité dans les demandes, et un message qui s'affiche indiquant que vous donnerez une réponse à leur réservation d'ici une certaine heure dans la journée. Le but final serai d'avoir un calendrier sur lequel ils peuvent choisir des dates, et réserver eux même directement lorsque les dates sont disponibles comme sur les sites de réservation.";
    this.popup.open(text);

    this.mailText = "mailto:adrien.bonvin@outlook.fr;?subject=Réservation "
    + this.logementSelectionne+"&body=Bonjour, nous souhaiterions réserver un séjour en "
    + this.logementSelectionne+" du "+ formatDate(this.startDate,'dd/MM/yyyy', 'en') + " au "
    + formatDate(this.endDate,'dd/MM/yyyy', 'en') +" pour "+this.nombrePersonnes+" personnes.";
    window.location.href = this.mailText;

  }
}
