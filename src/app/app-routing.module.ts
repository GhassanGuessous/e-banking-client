import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { from } from 'rxjs';
const routes: Routes = [
  //{path:'navbar', component : NavbarComponent},
  {path:'login', component : LoginComponent},
  {path:'register', component : SignupComponent},
  {path:'dashboard', component : DashboardComponent},
  {path:'home', component : HomePageComponent},
  {path:'', component : HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
