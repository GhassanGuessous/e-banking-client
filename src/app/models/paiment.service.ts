import { Injectable, EventEmitter } from '@angular/core';
import { Headers,Http } from '@angular/http';

import { AuthentificationService } from '../shared/authentification.service';
import { Paiment } from './paiment.model';

@Injectable()
export class PaimentService{
    private pServices: Paiment[];
    paimentChanged = new EventEmitter<Paiment[]>();
    
    constructor(private http: Http, private authService:AuthentificationService){}

    getPaimentService(){
        return this.pServices.slice();
    }

    setPaimentService(pServices: Paiment[]){
        this.pServices = pServices;
        this.paimentChanged.emit(this.pServices);
    }

    getHistoriquePaimentService(){
        const headers = new Headers({"Content-Type": "application/json; charset=utf8",'authorization': this.authService.getToken()});
        this.http.get('http://localhost:8080/Client/mes-services-payés',{headers: headers}).subscribe(
            (response) => {
                const pServices: Paiment[] = response.json();
                this.setPaimentService(pServices);
                console.log("Paiment des service: "+JSON.stringify(this.getPaimentService()));
                //console.log("Response: "+response.json());
            }
        );
    }


}