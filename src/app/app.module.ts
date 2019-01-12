import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ParticlesModule } from 'angular-particle';
import { APP_BASE_HREF } from '@angular/common';
import { AuthentificationService } from './shared/authentification.service';

import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared/auth-guard.service';
import { LogGuard } from './shared/log-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { VirementComponent } from './dashboard/virement/virement.component';
import { CompteService } from './models/compte.service';
import { RachargesComponent } from './dashboard/paiment-services/racharges/racharges.component';
import { FactureComponent } from './dashboard/paiment-services/facture/facture.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { ReclamationComponent } from './dashboard/reclamation/reclamation.component';
import { VirementService } from './models/virement.service';
import { HistoriqueComponent } from './dashboard/virement/historique/historique.component';
import { PHistoriqueComponent } from './dashboard/paiment-services/p-historique/p-historique.component';
import { PaimentService } from './models/paiment.service';
import { ProfileComponent } from './dashboard/services/profile/profile.component';
import { ChangePasswordComponent } from './dashboard/services/change-password/change-password.component';



@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    VirementComponent,
    RachargesComponent,
    FactureComponent,
    FooterComponent,
    ReclamationComponent,
    HistoriqueComponent,
    PHistoriqueComponent,
    ProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule,
    ParticlesModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },AuthentificationService, AuthGuard,LogGuard,CompteService, VirementService, PaimentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
