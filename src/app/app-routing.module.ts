import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupSuccessfulComponent} from './signup-successful/signup-successful.component'


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login",component: LoginComponent},
  {path:"signup",component: RegisterComponent},
  {path:"**", component: PagenotfoundComponent},
  {path:"successfullyRegistered", component: SignupSuccessfulComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],

exports: [RouterModule]
})
export class AppRoutingModule { }
