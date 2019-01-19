import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/models/compte.model';
import { CompteService } from 'src/app/models/compte.service';
import { NgForm } from '@angular/forms';
import { DonService } from 'src/app/models/don.service';
import { TheFlashMessageService } from 'src/app/shared/the-flash-message.service';
import { OrganismeService } from 'src/app/models/organisme.service';
import { Organisme } from 'src/app/models/organisme.model';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  compte: Compte;
  comptes: Compte[];
  selectedCompte: Compte;
  
  solde: number = 0.00;
  newSolde: number = 0.00;
  soldeApres: number;

  organismes: Organisme[];

  constructor(private compteService: CompteService,
              private donService: DonService,
              private organismeService: OrganismeService,
              private flashMessage: TheFlashMessageService) {}

  ngOnInit() {
    this.compteService.getCompteFromBack();
    this.comptes = this.compteService.getComptes();
    this.compteService.comptesChanged.subscribe(
      (comptes: Compte[]) => {
        this.comptes = comptes;
      }
    );

    this.organismeService.getOrganismeFromBack();
    this.organismeService.organismesChanged.subscribe(
      (organismes: Organisme[]) => {
        this.organismes = organismes
      }
    );
      
  }


  onSelected(value){

    this.compte = this.comptes.filter(x => x.rib == value)[0];
    this.solde = this.compte.sold;
    this.newSolde = this.solde;
    //console.log("compte : "+JSON.stringify(this.compte));
  }

  onWritingSolde(event){
    const inputValue = event.target.value;
    if(!inputValue){
      this.newSolde = this.solde;
    }
    this.newSolde = this.solde - inputValue;
  }

  onSubmit(form: NgForm){
    //console.log('form: '+JSON.stringify(form.value));
    this.donService.faireUnDon(form).subscribe(
      (response) => {
        if(this.flashMessage.theFlashMessageResponse(response,'Don effectuer avec succes')){
          form.reset();
        }
      },
      (error) => {
        this.flashMessage.theFlashMessageError(error);
      }
    );
  }
}
