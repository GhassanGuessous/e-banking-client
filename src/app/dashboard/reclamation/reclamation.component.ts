import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompteService } from 'src/app/models/compte.service';
import { TheFlashMessageService } from 'src/app/shared/the-flash-message.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  constructor(private  compteService: CompteService,
    private flashMessage: TheFlashMessageService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    
    const data = {
      'corps': form.value.corps
    };
    
    this.compteService.reclamation(data).subscribe(
      (response) => {
        if(this.flashMessage.theFlashMessageResponse(response,'Reclamation envoyé avec succes')){
          form.reset();
        }
      },
      (error) => {
        this.flashMessage.theFlashMessageError(error);
      }
    );
  }
}
