

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { LogoutComponent } from './logout/logout.component';
import { NgToastModule } from 'ng-angular-popup';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ChickenCurryComponent } from './chicken-curry/chicken-curry.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ChickenPakkodaComponent } from './chicken-pakkoda/chicken-pakkoda.component';
import { ChickenBiryaniComponent } from './chicken-biryani/chicken-biryani.component';
import { MuttonBiryaniComponent } from './mutton-biryani/mutton-biryani.component';
import { PulihoraComponent } from './pulihora/pulihora.component';
import { ChickenFriedRiceComponent } from './chicken-fried-rice/chicken-fried-rice.component';
import { VegBiryaniComponent } from './veg-biryani/veg-biryani.component';
import { VegNoodlesComponent } from './veg-noodles/veg-noodles.component';
import { FooterComponent } from './footer/footer.component';

// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    LogoutComponent,
   
    HomeComponent,
    AboutComponent,
    ChickenCurryComponent,    
    AddRecipeComponent,
    ChickenPakkodaComponent,
    ChickenBiryaniComponent,
    MuttonBiryaniComponent,
    PulihoraComponent,
    ChickenFriedRiceComponent,
    VegBiryaniComponent,
    VegNoodlesComponent,
    FooterComponent,
    // ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
     RouterModule,
    NgToastModule,
    NgxCaptchaModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
