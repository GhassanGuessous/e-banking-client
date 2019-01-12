import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';

import { AuthentificationService } from '../shared/authentification.service';

@Injectable()
export class DonService{

    constructor(private http: Http, private authService:AuthentificationService){}

    faireUnDon(data){
        const headers = new Headers({"Content-Type": "application/json; charset=utf8",'authorization': this.authService.getToken()});
        return this.http.post('http://localhost:8080/Client/faire-un-don',data.value,{headers: headers});
    }

    historiqueDon(){
        const headers = new Headers({"Content-Type": "application/json; charset=utf8",'authorization': this.authService.getToken()});
        return this.http.get('http://localhost:8080/Client/mes-dons',{headers: headers}).subscribe(
            (response) => {
                /*const compte: Compte = response.json();
                this.setCompte(compte);
                console.log("Compte: "+JSON.stringify(this.getCompte()));*/
                console.log("Dons : "+JSON.stringify(response.json()));
            }
        );
    }
}