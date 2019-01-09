import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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



@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule,
    ParticlesModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },AuthentificationService, AuthGuard,LogGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
