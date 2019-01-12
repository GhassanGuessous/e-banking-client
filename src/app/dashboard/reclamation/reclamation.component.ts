import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompteService } from 'src/app/models/compte.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  constructor(private  compteService: CompteService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    
    const data = {
      'corps': form.value.corps
    };
    
    this.compteService.reclamation(data).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
