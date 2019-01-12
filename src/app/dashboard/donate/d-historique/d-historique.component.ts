import { Component, OnInit } from '@angular/core';
import { DonService } from 'src/app/models/don.service';
import { Don } from 'src/app/models/don.model';

@Component({
  selector: 'app-d-historique',
  templateUrl: './d-historique.component.html',
  styleUrls: ['./d-historique.component.css']
})
export class DHistoriqueComponent implements OnInit {

  dons: Don[];
  constructor(private donService: DonService) { }

  ngOnInit() {
    this.donService.historiqueDon();
    this.dons = this.donService.getDons();
    this.donService.donsUpdated.subscribe(
      (dons: Don[]) => {
        this.dons = dons;
      }
    );
  }

}
