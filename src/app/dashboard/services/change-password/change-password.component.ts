import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompteService } from 'src/app/models/compte.service';
import { AuthentificationService } from 'src/app/shared/authentification.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private compteService: CompteService,private authService:AuthentificationService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const data = {
      "oldPassword": form.value.oldPassword,
      "newPassword": form.value.newPassword,
      "confirmedPassword": form.value.confirmedPassword
    };
    console.log('old password : '+JSON.stringify(data));
    this.compteService.changementMotDePass(data).subscribe(
      (response) => {
        console.log("Password: "+response);
        this.authService.onLogout();
      }
    );
  }

}
