import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../../shared/authentification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;

  constructor(
              private authentificationService : AuthentificationService
            ) { }

  ngOnInit() {
    this.authentificationService.getProfile().subscribe((data: any) => {
        this.user = data;
        //console.log(this.user);
      },
      err => {
        console.log("err");
        return false;
    });

  }

}
