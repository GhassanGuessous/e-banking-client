import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/models/compte.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  nbrVirementsEnvoyes: number = 0;
  nbrComptes: number = 0;
  nbrVirementsRecus: number = 0;
  soldeSum: number = 0;

  constructor(private compteService: CompteService){}

  ngOnInit(){
    //console.log("stat : " +JSON.stringify(this.compteService.mesStatistiques()));
    this.compteService.mesStatistiques().subscribe(
      (response) => {
          const data = response.json();
          this.nbrVirementsEnvoyes = data.nbrVirementsEnvoyes;
          this.nbrComptes = data.nbrComptes;
          this.nbrVirementsRecus = data.nbrVirementsRecus;
          this.soldeSum = data.soldeSum;
      }
  );
  }
}
