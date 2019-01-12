import { Compte } from './compte.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Headers,Http } from '@angular/http';
import { AuthentificationService } from '../shared/authentification.service';

@Injectable()
export class CompteService{
    //compteSelected = new EventEmitter<Compte>();
    comptesChanged = new EventEmitter<Compte[]>();
    
    private comptes: Compte[] = [
        //new Compte('11222222222222222', '2019-01-26', 1000, ['ablalfkds'], ['sdgdsgdsgds'], ['fdgsgsdgds'])
    ];

    constructor(private http: Http, private authService:AuthentificationService){}

    getComptes(){
        //this.getCompteFromBack();
        return this.comptes.slice();
    }

    setComptes(comptes: Compte[]){
        this.comptes = comptes;
        this.comptesChanged.emit(this.comptes.slice());
    }

    getCompteFromBack(){
        const headers = new Headers({'authorization': this.authService.getToken()});
        this.http.get('http://localhost:8080/Client/mes-comptes',{headers: headers}).subscribe(
            (response) => {
                const comptes: Compte[] = response.json();
                this.setComptes(comptes);
                console.log("Comptes: "+JSON.stringify(this.getComptes()));
                //console.log("Response: "+response.json());
            }
        );
    }

    sendVirement(data){
        //console.log("Tha data : " + JSON.stringify(data));
        const headers = new Headers({"Content-Type": "application/json; charset=utf8",'authorization': this.authService.getToken()});
        return this.http.post('http://localhost:8080/Client/éffectuer-un-virement',JSON.stringify(data),{headers: headers});
    }

    

    payerService(data){
        const headers = new Headers({"Content-Type": "application/json; charset=utf8",'authorization': this.authService.getToken()});
        return this.http.post('http://localhost:8080/Client/payer-un-service',JSON.stringify(data),{headers: headers});
    }

    reclamation(data){
        const headers = new Headers({"Content-Type": "application/json; charset=utf8",'authorization': this.authService.getToken()});
        return this.http.post('http://localhost:8080/Client/déposer-une-réclamation',JSON.stringify(data),{headers: headers});
    }

    changementMotDePass(data){
        const headers = new Headers({"Content-Type": "application/json; charset=utf8",'authorization': this.authService.getToken()});
        return this.http.post('http://localhost:8080/Client/modifier-mot-de-passe',JSON.stringify(data),{headers: headers});
    }

}