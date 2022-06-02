import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  telephonePortable: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth < 700) {
      this.telephonePortable = true;
    }
  }

}
