import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/shared/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authentificationService: AuthentificationService) { }

  ngOnInit() {
  }

  onLogout(){
    this.authentificationService.onLogout();
  }

}
