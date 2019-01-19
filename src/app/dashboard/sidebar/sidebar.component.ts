import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/shared/authentification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  nom: string = '';
  prenom: string = '';
  constructor(private authentificationService: AuthentificationService) { }

  ngOnInit() {
    this.authentificationService.getProfile().subscribe((data: any) => {
      this.nom = data.nom;
      this.prenom = data.prenom;
      //console.log(this.user);
    },
    err => {
      console.log("err");
      return false;
  });
  }

}
