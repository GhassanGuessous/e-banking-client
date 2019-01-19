import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/models/compte.service';
import { Compte } from 'src/app/models/compte.model';
import { NgForm } from '@angular/forms';
import { TheFlashMessageService } from 'src/app/shared/the-flash-message.service';
import { SousCategorieService } from 'src/app/models/sous-categorie.service';
import { OrganismeService } from 'src/app/models/organisme.service';
import { Organisme } from 'src/app/models/organisme.model';
import { SousCategorie } from 'src/app/models/sous-categories.model';

@Component({
  selector: 'app-racharges',
  templateUrl: './racharges.component.html',
  styleUrls: ['./racharges.component.css']
})
export class RachargesComponent implements OnInit {
  compte: Compte;
  comptes: Compte[];
  selectedCompte: Compte;

  solde: number = 0.00;
  newSolde: number;
  soldeApres: number;

  organismes: Organisme[];
  sousCategories: SousCategorie[];

  constructor(private compteService: CompteService,
    private flashMessage: TheFlashMessageService,
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
        this.sousCategories = sousCategories.filter(x => x.categorie == "Recharge");
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
    const data = {
      'montant': form.value.montant,
      'numeroTelephone': form.value.numeroTelephone,
      'organisme': 3,
      'sousCategorie': 2,
      'compte': form.value.compte
    };
    //console.log(data);
    this.compteService.payerService(data).subscribe(
      (response) => {
        if(this.flashMessage.theFlashMessageResponse(response,'Recharge envoyée avec succes')){
          form.reset();
        }
      },
      (error) => {
        this.flashMessage.theFlashMessageError(error);
      }
    );
  }

}
