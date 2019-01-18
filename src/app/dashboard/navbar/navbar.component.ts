import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/shared/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;
  constructor(private authentificationService: AuthentificationService) { }

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

  onLogout(){
    this.authentificationService.onLogout();
  }

}
