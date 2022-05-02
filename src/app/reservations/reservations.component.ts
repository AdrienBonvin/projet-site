import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  imgYourt: String = '../../assets/logements/yourt_out.jpg';
  imgChambreHote: String = '../../assets/logements/chambre_hote_out.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
