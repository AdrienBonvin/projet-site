import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logements',
  templateUrl: './logements.component.html',
  styleUrls: ['./logements.component.css']
})
export class LogementsComponent implements OnInit {

  isHoverCampingCar = false;
  isHoverGite = false;
  isHoverInsolite = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToReservations(typeLogement: String){
    if(typeLogement == 'Insolite') {
      this.router.navigate(['/bulle']);

    } else {
      this.router.navigate(['/reservations']);

    }
  }

}
