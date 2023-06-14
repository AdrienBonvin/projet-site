import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common'
import { FeaturePopupComponent } from '../common/feature-popup/feature-popup.component';
import './../../assets/js/smtp.js';
declare let Email: any;


@Component({
  selector: 'app-bookingbar',
  templateUrl: './bookingbar.component.html',
  styleUrls: ['./bookingbar.component.css']
})
export class BookingbarComponent implements OnInit {

  @Input() logementSelectionne!: string;

  @ViewChild('popupContainer', {static: false}) popupContainer!: ElementRef;
  @ViewChild('featurePopup', {static: false}) popup!: FeaturePopupComponent;
  @ViewChild('error', {static: false}) popupError!: FeaturePopupComponent;

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (this.isModalOpened && !this.popupContainer.nativeElement.contains(event.target)) {
      if (this.isOpenModalClick){
        this.isOpenModalClick = false;
      } else {
        this.close();
      }
    }
  }


  public showMenu = false;
  public isOpenModalClick = true;
  datesSelectionnees!: Date;
  nombrePersonnes!: number;
  mailText:string = "";
  startDate!: Date;
  endDate!: Date;
  telephonePortable: boolean = false;
  numeroTelephone: string = "";
  email: string = "";
  commentaire: string = "";
  isRangeCorrect: boolean = true;
  minDays: number = 7;
  isModalOpened = false;


  contactForm = new FormGroup({
    email: new FormControl(''),
    telephone: new FormControl(''),
    commentaire: new FormControl('')
  });


  constructor(private builder: FormBuilder, public datepipe: DatePipe) { }

  ngOnInit(): void {
    if(window.innerWidth < 700) {
      this.telephonePortable = true;
    }

    this.contactForm = this.builder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      commentaire: new FormControl('')
  });
  }

  onInputChange() {
      // Check if both start and end dates are selected
      if (this.startDate && this.endDate/* && this.logementSelectionne === 'Gite'*/) {
        const diff = (this.endDate.getTime() - this.startDate.getTime()) / (1000 * 3600 * 24);
        this.isRangeCorrect = !(diff < this.minDays);
      }
  }

  ouvrirModalReservation(){
    this.popup.open();
    this.isModalOpened = true;
  }

  sendEmail() {
    this.email = this.contactForm.get('email')?.value;
    this.numeroTelephone = this.contactForm.get('telephone')?.value;
    this.commentaire = this.contactForm.get('commentaire')?.value;

     Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'adrien.bonvin@gmail.com',
      Password : 'BF72B3B6022B600356906F9AB36C2E0492EA',
      To : 'adrien.bonvin@gmail.com',
      From : 'adrien.bonvin@gmail.com',
      Subject : "Demande de réservation - "+ this.email ,
      Body : `
        <b>Email du client : </b> ${this.email} <br />
        <b>Tel : </b> ${this.numeroTelephone} <br />
        <b>Dates demandées : </b> Du ${this.datepipe?.transform(this.startDate, 'dd/MM/yyyy')} au ${this.datepipe?.transform(this.endDate, 'dd/MM/yyyy')}<br />
        <b>Logement demandé : </b> ${this.logementSelectionne} <br />
        <b>Nombre de personnes : </b> ${this.nombrePersonnes} <br /><br />
        <b>Note du client :</b> ${this.commentaire}<br />
        <br/><br/><br/>.`
      }).then( (message: string) => {
        this.close();
        if(message == "OK") {
          console.log("Mail demande envoyé avec succès : " + message);
          this.mailValidationReservation();
        } else {
          console.log("Erreur lors de l'envoi du mail : " + message);
          this.popupError.open();
        }
       } );
  }

  mailValidationReservation() {
       Email.send({
        Host : 'smtp.elasticemail.com',
        Username : 'adrien.bonvin@gmail.com',
        Password : 'BF72B3B6022B600356906F9AB36C2E0492EA',
        To : this.email,
        From : 'adrien.bonvin@gmail.com',
        Subject : "Accusé de réception pour votre demande de réservation - Le Clos d'Adam" ,
        Body : `
          Bonjour, <br/><br/>
          Nous avons bien reçu votre demande de réservation, et allons tenter d'y répondre dans les plus brefs délais.<br /><br/><br/>
          Cordialement,<br/>
          Le Clos d'Adam
          <br/><br>PS : Cet email est automatique, il est donc inutile d'y répondre. Pour toutes questions, contactez-nous depuis notre site, ou directement sur notre adresse mail : dubuisson.ph@orange.fr<br><br>
          Une demande spécifique ? <a href='https://clos-adam.com/'>Visitez notre site web</a>
          <br/><br/><br/>`,
        }).then( (message: string) => {
            console.log("Mail client envoyé avec succès : " + message)
         } );
  }

  close() {
    this.popup.close();
    this.isModalOpened = false;
    this.isOpenModalClick = true;
  }
}
