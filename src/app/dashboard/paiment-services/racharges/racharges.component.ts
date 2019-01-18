import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/models/compte.service';
import { Compte } from 'src/app/models/compte.model';
import { NgForm } from '@angular/forms';
import { TheFlashMessageService } from 'src/app/shared/the-flash-message.service';

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

  constructor(private compteService: CompteService,
    private flashMessage: TheFlashMessageService) { }

  ngOnInit() {
    this.compteService.getCompteFromBack();
    this.comptes = this.compteService.getComptes();
    this.compteService.comptesChanged.subscribe(
      (comptes: Compte[]) => {
        this.comptes = comptes;
        this.compte = this.comptes[0];
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
      'numeroTelephone': form.value.numeroTelephone,
      'organisme': 3,
      'sousCategorie': 2,
      'compte': form.value.ribSource
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
