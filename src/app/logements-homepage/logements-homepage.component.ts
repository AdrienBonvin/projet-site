import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logements-homepage',
  templateUrl: './logements-homepage.component.html',
  styleUrls: ['./logements-homepage.component.css']
})
export class LogementsHomepageComponent implements OnInit {

  isGiteSelected = false;
  isIsoliteSelected = false;
  isCampingCarSelected = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToReservations(typeLogement: String){
  this.goBackToLogementHomepage();
    switch(typeLogement) {
      case 'insolite' :
        this.isIsoliteSelected = true;
        break;
      case 'camping-car' :
        this.isCampingCarSelected = true;
        break;
      case 'gite' :
        this.isGiteSelected = true;
        break;

    }
  }

  goBackToLogementHomepage () {
    this.isGiteSelected = false;
    this.isIsoliteSelected = false;
    this.isCampingCarSelected = false;
  }
}
