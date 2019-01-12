import { Injectable, EventEmitter } from '@angular/core';
import { Headers,Http } from '@angular/http';

import { AuthentificationService } from '../shared/authentification.service';
import { Don } from './don.model';

@Injectable()
export class DonService{
    donsUpdated = new EventEmitter<Don[]>();

    private dons: Don[];
    constructor(private http: Http, private authService:AuthentificationService){}

    getDons(){
        return this.dons.slice();
    }

    setDons(dons:Don[]){
        this.dons = dons;
        this.donsUpdated.emit(this.dons.slice());
    }
    faireUnDon(data){
        const headers = new Headers({"Content-Type": "application/json; charset=utf8",'authorization': this.authService.getToken()});
        return this.http.post('http://localhost:8080/Client/faire-un-don',data.value,{headers: headers});
    }

    historiqueDon(){
        const headers = new Headers({"Content-Type": "application/json; charset=utf8",'authorization': this.authService.getToken()});
        return this.http.get('http://localhost:8080/Client/mes-dons',{headers: headers}).subscribe(
            (response) => {
                const dons: Don[] = response.json();
                this.setDons(dons);
                console.log("Dons: "+JSON.stringify(this.getDons()));
            }
        );
    }
}