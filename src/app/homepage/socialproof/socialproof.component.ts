import { Component} from '@angular/core';

@Component({
  selector: 'app-socialproof',
  templateUrl: './socialproof.component.html',
  styleUrls: ['./socialproof.component.css']
})
export class SocialproofComponent {

  listeAvis : Avis[] = [
    {
      id: 1,
      photo: '../../../assets/images/logo.png',
      name: `Le Clos d'Adam`,
      comment: "Les avis de nos chers clients vont bientôt s'afficher dans cet encadré.",
      source: 'Google'
    }
  ];

  avis: Avis = this.listeAvis[0];


  constructor() { }

  public changeComment(direction: string) {
    if (direction === 'previous' && this.avis.id > 1) {
      this.avis = this.listeAvis[this.avis.id -2];
    } else if (direction === 'previous') {
      this.avis = this.listeAvis[this.listeAvis.length-1];
    } else if (direction === 'next' && this.avis.id < (this.listeAvis.length)) {

      this.avis = this.listeAvis[this.avis.id];
    } else {
      this.avis = this.listeAvis[0];
    }
  }
}

export interface Avis {
  id: number;
  photo: string;
  name: string;
  comment: string;
  source: string;
}
