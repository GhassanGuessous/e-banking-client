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
import { ReclamationComponent } from './dashboard/reclamation/reclamation.component';
import { HistoriqueComponent } from './dashboard/virement/historique/historique.component';
import { PHistoriqueComponent } from './dashboard/paiment-services/p-historique/p-historique.component';
import { ProfileComponent } from './dashboard/services/profile/profile.component';
import { ChangePasswordComponent } from './dashboard/services/change-password/change-password.component';
import { MescomptesComponent } from './dashboard/mescomptes/mescomptes.component';
import { DonateComponent } from './dashboard/donate/donate.component';
import { DHistoriqueComponent } from './dashboard/donate/d-historique/d-historique.component';
import { MesReclamationComponent } from './dashboard/mes-reclamation/mes-reclamation.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},

    {path: 'virement', canActivate: [AuthGuard], component: VirementComponent},
    {path: 'v-historique', canActivate: [AuthGuard], component: HistoriqueComponent},

    {path: 'recharge', canActivate: [AuthGuard], component: RachargesComponent},
    {path: 'facture', canActivate: [AuthGuard], component: FactureComponent},
    {path: 'p-historique', canActivate: [AuthGuard], component: PHistoriqueComponent},

    {path: 'don', canActivate: [AuthGuard], component: DonateComponent},
    {path: 'd-historique', canActivate: [AuthGuard], component: DHistoriqueComponent},

    {path: 'reclamation', canActivate: [AuthGuard], component: ReclamationComponent},
    {path: 'mes-reclamation', canActivate: [AuthGuard], component: MesReclamationComponent},

    {path: 'mes-comptes', canActivate: [AuthGuard], component: MescomptesComponent},

    {path: 'profil', canActivate: [AuthGuard], component: ProfileComponent},
    {path: 'change-password', canActivate: [AuthGuard], component: ChangePasswordComponent},

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