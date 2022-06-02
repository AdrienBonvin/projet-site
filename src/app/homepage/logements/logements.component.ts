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
  telephonePortable: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(window.innerWidth < 700) {
      this.telephonePortable = true;
    }
  }

  goToReservations(typeLogement: String){
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

    }
  }

}
