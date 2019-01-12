import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/models/compte.model';
import { CompteService } from 'src/app/models/compte.service';
import { NgForm } from '@angular/forms';
import { DonService } from 'src/app/models/don.service';

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
  newSolde: number;
  soldeApres: number;

  constructor(private compteService: CompteService,private donService: DonService) {}

  ngOnInit() {
    this.compteService.getCompteFromBack();
    this.comptes = this.compteService.getComptes();
    this.compteService.comptesChanged.subscribe(
      (comptes: Compte[]) => {
        this.comptes = comptes;
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
    console.log('form: '+JSON.stringify(form.value));
    this.donService.faireUnDon(form).subscribe(
      (response) => {
        console.log('response faire un don: '+response);
      }
    );
  }
}
