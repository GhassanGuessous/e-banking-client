import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth-guard.service';
import { LogGuard } from './shared/log-guard.service';
import { VirementComponent } from './dashboard/virement/virement.component';
import { RachargesComponent } from './dashboard/paiment-services/racharges/racharges.component';
import { FactureComponent } from './dashboard/paiment-services/facture/facture.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},
    {path: 'virement', canActivate: [AuthGuard], component: VirementComponent},
    {path: 'recharge', canActivate: [AuthGuard], component: RachargesComponent},
    {path: 'facture', canActivate: [AuthGuard], component: FactureComponent},
    {path: 'login', canActivate: [LogGuard], component: LoginComponent},
    {path: 'register', canActivate: [LogGuard], component: RegisterComponent},
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}