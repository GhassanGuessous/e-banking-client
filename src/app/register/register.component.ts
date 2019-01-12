import { Component, OnInit } from '@angular/core';
import { CompteService } from '../models/compte.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private compteService: CompteService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.compteService.registerClient(form).subscribe(
      (response) => {
        console.log('response ==> '+response);
      }
    );
  }

}
