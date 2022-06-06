import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common'

@Component({
  selector: 'app-bookingbar',
  templateUrl: './bookingbar.component.html',
  styleUrls: ['./bookingbar.component.css']
})
export class BookingbarComponent implements OnInit {

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

    this.mailText = "mailto:adrien.bonvin@outlook.fr;?subject=Réservation "
    + this.logementSelectionne+"&body=Bonjour, nous souhaiterions réserver un séjour en "
    + this.logementSelectionne+" du "+ formatDate(this.startDate,'dd/MM/yyyy', 'en') + " au "
    + formatDate(this.endDate,'dd/MM/yyyy', 'en') +" pour "+this.nombrePersonnes+" personnes.";
    window.location.href = this.mailText;
  }
}
