import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainmenuComponent } from './header/mainmenu/mainmenu.component';
import { AuthmenuComponent } from './header/authmenu/authmenu.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaypalworkComponent } from './paypalwork/paypalwork.component';
import { PaypalLeftBlockComponent } from './paypalwork/paypal-left-block/paypal-left-block.component';
import { PaypalRightBlockComponent } from './paypalwork/paypal-right-block/paypal-right-block.component';
import { PaypalnotificationComponent } from './paypalnotification/paypalnotification.component';
import { PaypalEditorialComponent } from './paypal-editorial/paypal-editorial.component';
import { LeftBlockComponent } from './paypal-editorial/left-block/left-block.component';
import { RightBlockComponent } from './paypal-editorial/right-block/right-block.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PaypalDiscComponent } from './paypal-disc/paypal-disc.component';
import { PaypalPulloutComponent } from './paypal-pullout/paypal-pullout.component';
import { SignupSuccessfulComponent } from './signup-successful/signup-successful.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainmenuComponent,
    AuthmenuComponent,
    SliderComponent,
    HomeComponent,
    PagenotfoundComponent,
    PaypalworkComponent,
    PaypalLeftBlockComponent,
    PaypalRightBlockComponent,
  PaypalnotificationComponent,
  PaypalEditorialComponent,
  LeftBlockComponent,
  RightBlockComponent,
  LoginComponent,
  RegisterComponent,
  PaypalDiscComponent,
  PaypalPulloutComponent,
  SignupSuccessfulComponent,
  ],
  imports: [

BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
