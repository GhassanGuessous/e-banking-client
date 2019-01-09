import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Injectable()
export class AuthGuard implements CanActivate{
    
    constructor(private router: Router, private authentificationService: AuthentificationService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.authentificationService.isAuthenticated()){
            return true;
        }else{
            this.router.navigate(['/']);
        }
    }
}