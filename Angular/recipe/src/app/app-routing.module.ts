// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { authGuard } from './auth.guard';
// import { LogoutComponent } from './logout/logout.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ChickenCurryComponent } from './chicken-curry/chicken-curry.component';
// import { AddRecipeComponent } from './add-recipe/add-recipe.component';

// import { ChickenBiryaniComponent } from './chicken-biryani/chicken-biryani.component';
// import { PulihoraComponent } from './pulihora/pulihora.component';
// import { ChickenFriedRiceComponent } from './chicken-fried-rice/chicken-fried-rice.component';
// import { VegBiryaniComponent } from './veg-biryani/veg-biryani.component';
// import { VegNoodlesComponent } from './veg-noodles/veg-noodles.component';
// import { MuttonBiryaniComponent } from './mutton-biryani/mutton-biryani.component';

// import { ChickenPakkodaComponent } from './chicken-pakkoda/chicken-pakkoda.component';

// const routes: Routes = [
//   {path:'',            component:LoginComponent},
//   {path:'login',       component:LoginComponent},
//   {path:'register',    component:RegisterComponent},
//   {path:'home',        component:HomeComponent},
//   {path:'about',       component:AboutComponent},
//   {path:'logout',      canActivate:[authGuard], component:LogoutComponent},
// {path:'chickencurry',component:ChickenCurryComponent},
// {path:'addrecipe',component:AddRecipeComponent},
// {path:'chickenpakkoda',component:ChickenPakkodaComponent},
// {path:'chickenpakkoda',component:ChickenPakkodaComponent},
// {path:'chickenbiryani',component:ChickenBiryaniComponent},
// {path:'muttonbiryani',component:MuttonBiryaniComponent},
// {path:'pulihora',component:PulihoraComponent},
//  {path:'chickenfriedrice',component:ChickenFriedRiceComponent},
//  {path:'vegetablebiryani',component:VegBiryaniComponent},
//  {path:'vegnoodles',component:VegNoodlesComponent}
// ];                                                                                                    

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChickenCurryComponent } from './chicken-curry/chicken-curry.component';
import { ChickenPakkodaComponent } from './chicken-pakkoda/chicken-pakkoda.component';
import { ChickenBiryaniComponent } from './chicken-biryani/chicken-biryani.component';
import { MuttonBiryaniComponent } from './mutton-biryani/mutton-biryani.component';
import { PulihoraComponent } from './pulihora/pulihora.component';
import { ChickenFriedRiceComponent } from './chicken-fried-rice/chicken-fried-rice.component';
import { VegBiryaniComponent } from './veg-biryani/veg-biryani.component';
import { VegNoodlesComponent } from './veg-noodles/veg-noodles.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'',            component:LoginComponent},
  {path:'login',       component:LoginComponent},
  {path:'register',    component:RegisterComponent},
  {path:'home',        canActivate:[authGuard],component:HomeComponent},
  {path:'about',       canActivate:[authGuard],component:AboutComponent},
  {path:'addrecipe',   canActivate:[authGuard],component:AddRecipeComponent},
  
  {path:'logout',      canActivate:[authGuard], component:LogoutComponent},
{path:'chickencurry',component:ChickenCurryComponent},
{path:'chickenpakkoda',component:ChickenPakkodaComponent},
{path:'chickenbiryani',component:ChickenBiryaniComponent},
{path:'muttonbiryani',component:MuttonBiryaniComponent},
{path:'pulihora',component:PulihoraComponent},
 {path:'chickenfriedrice',component:ChickenFriedRiceComponent},
 {path:'vegetablebiryani',component:VegBiryaniComponent},
 {path:'vegnoodles',component:VegNoodlesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }