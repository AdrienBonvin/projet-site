import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logements-homepage',
  templateUrl: './logements-homepage.component.html',
  styleUrls: ['./logements-homepage.component.css']
})
export class LogementsHomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
