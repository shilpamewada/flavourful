import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { NgToastModule } from 'ng-angular-popup';
import { IngrediantsComponent } from './ingrediants/ingrediants.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgxCaptchaModule } from 'ngx-captcha';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    LogoutComponent,
    IngrediantsComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgToastModule,
    NgxCaptchaModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }