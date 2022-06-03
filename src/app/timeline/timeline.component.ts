import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  tailleEcran: string = "";

  constructor() { }

  ngOnInit(): void {
    this.tailleEcran = window.innerHeight + 'px';
  }

}
