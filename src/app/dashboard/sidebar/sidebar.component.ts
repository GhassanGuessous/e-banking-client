import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/shared/authentification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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

}
