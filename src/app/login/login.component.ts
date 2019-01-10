import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { AuthentificationService } from '../shared/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authentificationService: AuthentificationService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignup(form: NgForm){
    //console.log(form.value)
    this.authentificationService.onSignin(form).subscribe(
      
      (response) => {
        //console.log(response);
        let jwtToken = response.headers.get('authorization');
        //console.log("Token from response " + jwtToken);
        this.authentificationService.setToken(jwtToken);
        //console.log("Token from service "+ this.authentificationService.getToken());
        this.router.navigate(['/dashboard']);
      },
      (error) => console.log(error),
    );
  }

}
