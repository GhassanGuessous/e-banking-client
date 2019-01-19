import { Injectable, EventEmitter } from '@angular/core';
import { Headers,Http } from '@angular/http';
import { AuthentificationService } from '../shared/authentification.service';
import { Reclamation } from './reclamation.model';

@Injectable()
export class ReclamationService{
    url = 'https://e-banking-project.herokuapp.com';
    private reclamations: Reclamation[];
    reclamationChanged = new EventEmitter<Reclamation[]>();
    constructor(private http: Http, private authService:AuthentificationService){}
    
    getReclamations(){
        return this.reclamations.slice();
    }
    
    setReclamations(reclamations: Reclamation[]){
        this.reclamations = reclamations;
        this.reclamationChanged.emit(this.reclamations.slice());
    }

    getReclamationFromBack(){
        const headers = new Headers({"Content-Type": "application/json; charset=utf8",'authorization': this.authService.getToken()});
        this.http.get(this.url+'/Client/mes-réclamations',{headers: headers}).subscribe(
            (response) => {
                const reclamations: Reclamation[] = response.json();
                this.setReclamations(reclamations);
                //console.log("Paiment des service: "+JSON.stringify(this.getReclamations()));
                //console.log("Response: "+response.json());
            }
        );
    }
}