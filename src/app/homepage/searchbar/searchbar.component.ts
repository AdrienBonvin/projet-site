import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  logementSelectionne!: string;
  datesSelectionnees!: Date;
  nombrePersonnes!: number;
  mailText:string = "";
  start!: Date;
  end!: Date
  constructor() { }

  ngOnInit(): void {
  }

  ouvrirMailReservation(){
    // Reussir a utiliser DatePipe pour reformater, sans faire Ecran Blanc, puis Commit !
    this.mailText = "mailto:adrien.bonvin@outlook.fr+?subject=Réservation "+this.logementSelectionne+"&body=Bonjour, nous souhaiterions réserver un séjour en "+this.logementSelectionne+" sur les dates indiquées ("+this.start+") pour "+this.nombrePersonnes+" personnes."; // add the links to body
    window.location.href = this.mailText;
  }
}
