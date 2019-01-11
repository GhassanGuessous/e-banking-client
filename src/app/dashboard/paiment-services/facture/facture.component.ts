import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/models/compte.service';
import { Compte } from 'src/app/models/compte.model';
import { NgForm } from '@angular/forms';

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
  newSolde: number;
  soldeApres: number;

  constructor(private compteService: CompteService) { }

  ngOnInit() {
    this.compteService.getCompteFromBack();
    this.comptes = this.compteService.getComptes();
    this.compteService.comptesChanged.subscribe(
      (comptes: Compte[]) => {
        this.comptes = comptes;
        this.compte = this.comptes[0];
        this.solde = this.comptes[0].sold;
        this.newSolde = this.solde;
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
    const data = {
      'montant': form.value.montant,
      'numeroContrat': form.value.numeroContrat,
      'organisme': 3,
      'sousCategorie': 2,
      'compte': form.value.ribSource
    };
    console.log(data);
    this.compteService.payerService(data).subscribe(
      (response) => {
        console.log("response ===> "+response);
      }
    );
  }

}
