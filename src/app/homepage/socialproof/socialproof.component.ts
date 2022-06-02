import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialproof',
  templateUrl: './socialproof.component.html',
  styleUrls: ['./socialproof.component.css']
})
export class SocialproofComponent implements OnInit {

  telephonePortable: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth < 700) {
      this.telephonePortable = true;
    }
  }

}
