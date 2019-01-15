import { Component, OnInit } from '@angular/core';
import { CompteService } from '../models/compte.service';
import { NgForm } from '@angular/forms';

import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(
      private compteService: CompteService,
      private flashMessage : FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmit(form){

    this.compteService.registerClient(form.value).subscribe(
      (response) => {

        if(JSON.parse(response._body)[0] == "true"){
          window.scrollTo(0, 0);
          this.flashMessage.show('Well registred', {cssClass: 'alert-success', timeout: 5000});
        }else if(JSON.parse(response._body)[0] == "false"){
          this.flashMessage.show(JSON.parse(response._body)[1], {cssClass: 'alert-danger', timeout: 5000});
          console.log('response ==> '+  JSON.parse(response._body)[1]);
        }
      },
      (error) => {
        JSON.parse(error._body).errors.forEach((erro)=>{
          this.flashMessage.show(erro.defaultMessage, {cssClass: 'alert-danger', timeout: 5000});
          console.log('Erro ==> ' + erro.defaultMessage);
        });
      }
    );
  }

}
