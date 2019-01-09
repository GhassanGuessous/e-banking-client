import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../shared/authentification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthentificationService) { }

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
    this.myStyle = {
      'z-index': 99,
  };

  this.myParams = {
          particles: {
              number: {
                  value: 200,
              },
              color: {
                  value: '#FF0000'
              },
              shape: {
                  type: 'triangle',
              },
      }
  };
}

onLogout(){
    this.authService.onLogout();
}

}
