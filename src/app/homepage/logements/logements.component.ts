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
  isHoverYourt = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToReservations(typeLogement: String){
    this.router.navigate(['/reservations']);
  }

}