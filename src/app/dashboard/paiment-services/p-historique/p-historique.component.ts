import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/models/compte.service';
import { Compte } from 'src/app/models/compte.model';
import { PaimentService } from 'src/app/models/paiment.service';
import { Paiment } from 'src/app/models/paiment.model';

@Component({
  selector: 'app-p-historique',
  templateUrl: './p-historique.component.html',
  styleUrls: ['./p-historique.component.css']
})
export class PHistoriqueComponent implements OnInit {
  pServices: Paiment[];

  constructor(private paimentService: PaimentService) { }

  ngOnInit() {
    this.paimentService.getHistoriquePaimentService()
    this.paimentService.paimentChanged.subscribe(
      (pServices: Paiment[]) => {
        this.pServices = pServices;
        //console.log('Paiment historique: '+this.pServices.length);
      }
    );
  }

  
}
