import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Images } from 'src/app/common/enum/images';
import { FeaturePopupComponent } from 'src/app/common/feature-popup/feature-popup.component';
@Component({
  selector: 'app-gite',
  templateUrl: './gite.component.html',
  styleUrls: ['./gite.component.css']
})
export class GiteComponent implements OnInit {

  @ViewChild('featurePopup', {static: false}) popup!: FeaturePopupComponent;

  constructor() { }
  titre = "Location du gîte du clos d'Adam";
  paragraphe = "Arrivée à 17h00 <br/>"+
  `Départ à 10h00
  Gîte de caractère 4/ 6 personnes surfaces habitables
  Ce gîte conserve l’esprit authentique de la région.
  Il dispose d’un grand séjour de charme avec une table de ferme et un petit salon convivial. Un coin cuisine équipée d’un FOUR, d’un lave-vaisselle, d’une plaque de cuisson, d’un petit frigidaire.
   Par un bel escalier en pierre vous accédez à l’étage. 2 belles chambres :
  -	L’une plus grande avec un lit de 160/200.
  -	L’autre offrant la possibilité de 2 lits simples ou d’un lit double selon vos
  besoins.
  Une salle de douche et Wc.

  Vous accèderez à une mezzanine, par un authentique escalier de meunier. Ce salon vous offrira des instants en famille ou entre amis avec un canapé lit de 2 personnes, un canapé fixe et ses 2 fauteuils.
  Nous pouvons vous installer un lit bébé sur demande.
  Vous disposez dans une dépendance adjacente d’un lave linge, sèche-linge et d’un grand combi frigidaire/congélateur.
  Le gîte propose de nombreuses activités de loisirs  grâce à ses infrastructures :
  Une salle de sport avec vélo elliptique, tapis de marche,  et divers accessoires de remise en forme (fitness, yoga…)

  Une piscine couverte et chauffée partagée avec les propriétaires (discrets par nature ;) )
  Grande terrasse ensoleillée, Cuisine d’été
  Transats, mobilier extérieur
  Accès au bois privé.
  Pour profiter au maximum de vos vacances, nous nous occupons de tous : les lits seront faits à votre arrivée, Le linge de maison et les serviettes de bain installés. (Seuls les draps de bain pour la piscine sont à prévoir).
  Vous n’aurez plus qu’à  déguster le rafraîchissement de bienvenue mis à votre disposition !
  Informations particulières :
  Paiement de l’acompte en ligne par virement, le solde à l’arrivée.
  Les propriétaires sont disponibles et à votre écoute sans toutefois être envahissants!

  Bon séjour parmi nous!
  `;
  linkToAssets: string = "../";
  img_carousel_1 = this.linkToAssets + Images.logement_gite_out;
  img_carousel_2 = this.linkToAssets + Images.logement_gite_in;
  img_carousel_3 = this.linkToAssets + Images.logement_gite_in2;
  telephonePortable: boolean = false;
  tailleColCaracteristiques: number = 2;
  features: Feature[] = [
    { nom: "BBQ Gaz", icon: "whatshot"},
    { nom: "Vaisselle pour 6 et ustensile de cuisine", icon: "restaurant"},
    { nom: "Micro-ondes", icon: "waves"},
    { nom: "Cafetière", icon: "local_cafe"},
    { nom: "Bouilloire", icon: "bubble_chart"},
    { nom: "Télévision", icon: "tv"},
    { nom: "Wifi", icon: "wifi"},
    { nom: "Sèche-cheveux", icon: "offline_bolt"},
    { nom: "2 Vélos sur demande (Prevoir les casques)", icon: "directions_bike"},
    { nom: "Jeux de société", icon: "casino"},
    { nom: "Table à repasser et son fer", icon: "gradient"},
    { nom: "Parking", icon: "local_parking"},
    { nom: "Salle de sport", icon: "fitness_center"},
    { nom: "Piscine", icon: "pool"},
    { nom: "Lave-linge", icon: "local_laundry_service"},
    { nom: "Chauffage par géothermie", icon: "public"},
    { nom: "Chiens autorisés sur demande", icon: "pets"}
    ]
    featuresSpecifiques: Feature[] = [
      { nom: "Ménage au départ est inclus. Les espaces cuisine et salle de douche doivent cependant être restitués propres et rangés, et les poubelles évacuées", icon: "delete_outline"},
      { nom: "Le Clos d’Adam, soucieux de l’environnement, dispose d’un tri de poubelles et d’un compost, et ses ampoules sont des LED", icon: "nature_people"}
    ]

  environs: string[] = [
    `Toutes commodités à proximité : boulangerie, poste, zones commerciales à Trélissac...
    En option vous pouvez nous commander votre pain la veille, il vous sera livré le lendemain matin`,
    `Location de Canöé sur l'Auvézère et la Vézère : point de départ à quelques minutes du gîte (locations possibles également sur la Dordogne)`,
    `Balades à vélo (2 VTC mis à disposition)`,
    `Nombreuses randonnées au départ du Clos d'Adam`,
    `Salles de sport à Trélissac (mur d’escalade, Basic Fit…)`,
    `Sites préhistoriques ( Montignac Lascaux, la Roche st Christophe)..;`,
    `Grottes ( Tourtoirac, Domme….)`,
    `1001 châteaux ( Castelnaut, Beynac, Hautefort…)`,
    `Plusieurs villes et villages remarquables`,
    `Des Jardins merveilleux`,
    `Sans oublier sa gastronomie locale es ses nombreux marchés.`
    ]
  ngOnInit(): void {
    if(window.innerWidth < 700) {
      this.telephonePortable = true;
      this.tailleColCaracteristiques = 4;
    }
  }
}

class Feature {
  public nom: string | undefined;
  public icon: string | undefined;
}
