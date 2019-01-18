import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/models/compte.service';
import { Compte } from 'src/app/models/compte.model';
import { NgForm } from '@angular/forms';

import { TheFlashMessageService } from 'src/app/shared/the-flash-message.service';
import { OrganismeService } from 'src/app/models/organisme.service';
import { Organisme } from 'src/app/models/organisme.model';
import { SousCategorieService } from 'src/app/models/sous-categorie.service';
import { SousCategorie } from 'src/app/models/sous-categories.model';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  compte: Compte;
  comptes: Compte[];
  selectedCompte: Compte;

  solde: number = 0.00;
  newSolde: number = 0.00;
  soldeApres: number;

  organismes: Organisme[];
  sousCategories: SousCategorie[];

  constructor(private compteService: CompteService,
    private flashMessage : TheFlashMessageService,
    private organismeService: OrganismeService,
    private sousCategorieService: SousCategorieService) { }

  ngOnInit() {
    this.compteService.getCompteFromBack();
    this.comptes = this.compteService.getComptes();
    this.compteService.comptesChanged.subscribe(
      (comptes: Compte[]) => {
        this.comptes = comptes;
        this.compte = this.comptes[0];
      }
    );

    this.organismeService.getOrganismeFromBack();
    this.organismeService.organismesChanged.subscribe(
      (organismes: Organisme[]) => {
        this.organismes = organismes
      }
    );

    this.sousCategorieService.getSousCategorieFromBack();
    this.sousCategorieService.sousCategorieChanged.subscribe(
      (sousCategories: SousCategorie[]) => {
        this.sousCategories = sousCategories.filter(x => x.categorie == "Facture");
      }
    );
  }

  onSelected(value){

    this.compte = this.comptes.filter(x => x.rib == value)[0];
    this.solde = this.compte.sold;
    this.newSolde = this.solde;
    console.log("compte : "+JSON.stringify(this.compte));
  }

  onWritingSolde(event){
    const inputValue = event.target.value;
    if(!inputValue){
      this.newSolde = this.solde;
    }
    this.newSolde = this.solde - inputValue;
  }

  onSubmit(form: NgForm){
    this.compteService.payerService(form.value).subscribe(
      (response) => {
        if(this.flashMessage.theFlashMessageResponse(response,'Facture payée avec succes')){
          form.reset();
        }
      },
      (error) => {
        this.flashMessage.theFlashMessageError(error);
      }
    );
  }

}
