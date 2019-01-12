import { Component, OnInit } from '@angular/core';
import { VirementService } from 'src/app/models/virement.service';
import { Virement } from 'src/app/models/virement.model';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  virements: Virement[];

  constructor(private virementService: VirementService) { }

  ngOnInit() {
    this.virementService.getHistoriqueVirement();
    this.virementService.virementChanged.subscribe(
      (virements: Virement[]) => {
        this.virements = virements;
        console.log('this virement: '+this.virements);
      }
    );
  }

}
