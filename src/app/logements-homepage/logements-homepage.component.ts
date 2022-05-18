import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logements-homepage',
  templateUrl: './logements-homepage.component.html',
  styleUrls: ['./logements-homepage.component.css']
})
export class LogementsHomepageComponent implements OnInit {

  typeLogement: string ="";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBackToLogementHomepage () {
    this.typeLogement = "";
  }

  goToElement(typeLogement: string){
    document.getElementById(typeLogement)!.scrollIntoView();

  }
}
