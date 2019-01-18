import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/models/reclamation.service';
import { Reclamation } from 'src/app/models/reclamation.model';

@Component({
  selector: 'app-mes-reclamation',
  templateUrl: './mes-reclamation.component.html',
  styleUrls: ['./mes-reclamation.component.css']
})
export class MesReclamationComponent implements OnInit {

  reclamations: Reclamation[];
  constructor(private rServices: ReclamationService) { }

  ngOnInit() {
    this.rServices.getReclamationFromBack();
    this.rServices.reclamationChanged.subscribe(
      (reclamations: Reclamation[]) => {
        this.reclamations = reclamations;
      }
    );
  }

}
