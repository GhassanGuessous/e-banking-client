import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthentificationService{
 roles: Array<any> = [];
 token: string;
 constructor(private http: Http){}

 onSignin(form: NgForm){
     //console.log(form.value);
     return this.http.post('http://localhost:8080/login',form.value);
 }

 getToken(){
     localStorage.getItem('token');
 }

 setToken(token: string){
    localStorage.setItem("token", token);
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(token).roles;
 }

 isAuthenticated(){
    return localStorage.getItem('token') != null;
 }

 onLogout(){
    localStorage.removeItem('token');
 }
}