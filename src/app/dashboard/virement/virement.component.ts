import { Component, OnInit, Input } from '@angular/core';
import { Compte } from 'src/app/models/compte.model';
import { CompteService } from 'src/app/models/compte.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {
  compte: Compte;
  comptes: Compte[];
  selectedCompte: Compte;
  sVP: string = 'Choisir un compte';
  solde: number = 0.00;
  newSolde: number;
  soldeApres: number;
  constructor(private compteService: CompteService) {}

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
      
    //console.log("solde " + this.solde);
  }

  /*getAccounts(){
    this.compteService.getCompteFromBack();
  }*/

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
      'ribSource': form.value.ribSource,
      'ribDestination': form.value.rib,
      'montant': form.value.soldeVirement,
    };
    console.log(data);
    this.compteService.sendVirement(data).subscribe(
      (response) => {
        console.log("response ===> "+response);
      }
    );
    
  }

}
