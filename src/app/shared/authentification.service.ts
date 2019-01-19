import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthentificationService{
 roles: Array<any> = [];
 token: string;
 url = 'https://e-banking-project.herokuapp.com';
 constructor(private router: Router,private http: HttpClient){}

 onSignin(form: NgForm){
     //console.log(form.value);
     return this.http.post(this.url+'/login',form.value,{observe: "response"});
 }

 getProfile(){
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Authorization': this.getToken()
       })
     };
     return this.http.get(this.url+'/Client/mon-profil', httpOptions)
         .pipe(map((res:any) => res ));
 }
 
 getToken(){
     return localStorage.getItem('token');
 }

 setToken(token: string){
    localStorage.setItem("token", token);
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(token).roles;
    //console.log('Token : '+this.getToken());
    //console.log("Roles : " + JSON.stringify(this.roles));
 }

 isAuthenticated(){
    return localStorage.getItem('token') != null;
 }

 onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
 }
}
