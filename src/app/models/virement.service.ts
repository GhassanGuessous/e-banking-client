import { Headers, Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';

import { AuthentificationService } from '../shared/authentification.service';
import { Virement } from './virement.model';

@Injectable()
export class VirementService{
    virementChanged = new EventEmitter<Virement[]>();

    private virements: Virement[];

    constructor(private http: Http, private authService:AuthentificationService){}

    getVirements(){
        return this.virements.slice();
    }

    setVirements(virements: Virement[]){
        this.virements = virements;
        this.virementChanged.emit(this.virements.slice());
    }

    getHistoriqueVirement(){
        const headers = new Headers({"Content-Type": "application/json; charset=utf8",'authorization': this.authService.getToken()});
        this.http.get('http://localhost:8080/Client/mes-virements',{headers: headers}).subscribe(
            (response) => {
                const viremnts: Virement[] = response.json();
                this.setVirements(viremnts);
                console.log("Virement: "+JSON.stringify(this.getVirements()));
                //console.log("Response: "+response.json());
            }
        );
    }
}