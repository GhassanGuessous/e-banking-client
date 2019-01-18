import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/models/compte.model';
import { CompteService } from 'src/app/models/compte.service';
import { Virement } from 'src/app/models/virement.model';
import { Paiment } from 'src/app/models/paiment.model';

@Component({
  selector: 'app-mescomptes',
  templateUrl: './mescomptes.component.html',
  styleUrls: ['./mescomptes.component.css']
})
export class MescomptesComponent implements OnInit {

  comptes: Compte[];
  selectedCompte: Compte;

  compte: Compte;
  solde: number = 0.00;

  virementsEnv: Virement[];
  virementsRecus: Virement[];
  paiementServices: Paiment[];
  
  constructor(private compteService: CompteService) { }

  ngOnInit() {
    this.compteService.getCompteFromBack();
    this.comptes = this.compteService.getComptes();
    this.compteService.comptesChanged.subscribe(
      (comptes: Compte[]) => {
        this.comptes = comptes;
      }
    );
  }

  onSelected(rib){
    this.compteService.infoCompte(rib);
    this.compteService.compteChanged.subscribe(
      (compte: Compte) => {
        //this.compte = compte;
        this.solde = compte.sold;
        this.virementsEnv = compte.virementsEnvoyes;
        this.virementsRecus = compte.virementsRecus;
        this.paiementServices = compte.paiementServices;
        console.log("solde: "+compte.sold);
      }
    );
  }
}
