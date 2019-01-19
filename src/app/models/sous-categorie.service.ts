import { Injectable, EventEmitter } from '@angular/core';
import { SousCategorie } from './sous-categories.model';
import { Headers, Http } from '@angular/http';
import { AuthentificationService } from '../shared/authentification.service';

@Injectable()
export class SousCategorieService{
    url = 'https://e-banking-project.herokuapp.com';
    sousCategorieChanged = new EventEmitter<SousCategorie[]>();
    private sousCategories: SousCategorie[];

    constructor(private http: Http, private authService:AuthentificationService){}

    getSousCategorie(){
        return this.sousCategories.slice();
    }

    setSousCategorie(sousCategories: SousCategorie[]){
        this.sousCategories = sousCategories;
        this.sousCategorieChanged.emit(this.sousCategories.slice());
    }

    getSousCategorieFromBack(){
        const headers = new Headers({"Content-Type": "application/json; charset=utf8",'authorization': this.authService.getToken()});
        return this.http.get(this.url+'/Admin/getSousCategories',{headers: headers}).subscribe(
            (response) => {
                //console.log(response);
                const sousCategories: SousCategorie[] = response.json();
                this.setSousCategorie(sousCategories);
                //console.log("sous categories : "+JSON.stringify(this.getSousCategorie()));
            },
            (error) =>{
                console.log(error);
            }
        );
    }
}