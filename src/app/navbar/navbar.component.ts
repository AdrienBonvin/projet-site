import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  topOfScreen: boolean = true;
  color: string = "";
  gold: string = "#a69667";
  white: string = "#ffffff";
  fontColor: string = "#000000"

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToReservations(){
    this.router.navigate(['/reservations']);
  }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 10) {
      this.topOfScreen = false;
      this.color =  this.gold;
      this.fontColor = "#000000"
    } else {
      this.topOfScreen = true;
      this.color =  this.white;
      this.fontColor = "#000000"
      //this.color = "rgba(255, 255, 255, 0.55)";
    }
  }

  changeLanguage() {

  }

}
