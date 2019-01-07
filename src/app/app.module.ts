import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownDirective } from './shared/dropdown.directive';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ParticlesModule } from 'angular-particle';

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
    FontAwesomeModule,
    FormsModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
