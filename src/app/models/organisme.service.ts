import { Injectable, EventEmitter } from '@angular/core';
import { Headers,Http } from '@angular/http';
import { AuthentificationService } from '../shared/authentification.service';
import { Organisme } from './organisme.model';

@Injectable()
export class OrganismeService{
    url = 'https://e-banking-project.herokuapp.com';
    organismesChanged = new EventEmitter<Organisme[]>();
    private organismes: Organisme[];

    constructor(private http: Http, private authService:AuthentificationService){}

    getOrganisme(){
        return this.organismes.slice();
    }

    setOrganisme(organismes: Organisme[]){
        this.organismes = organismes;
        this.organismesChanged.emit(this.organismes.slice());
    }

    getOrganismeFromBack(){
        const headers = new Headers({"Content-Type": "application/json; charset=utf8",'authorization': this.authService.getToken()});
        return this.http.get(this.url+'/Admin/getOrganisms',{headers: headers}).subscribe(
            (response) => {
                //console.log(response);
                const organismes: Organisme[] = response.json();
                this.setOrganisme(organismes);
                //console.log("Organismes: "+JSON.stringify(this.getOrganisme()));
            },
            (error) =>{
                console.log(error);
            }
        );
    }
}