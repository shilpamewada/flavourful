import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { IngrediantsComponent } from './ingrediants/ingrediants.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',            component:LoginComponent},
  {path:'login',       component:LoginComponent},
  {path:'register',    component:RegisterComponent},
  {path:'home',        component:HomeComponent},
  {path:'about',       component:AboutComponent},
  {path:'ingrediants', component:IngrediantsComponent},
  {path:'logout',      canActivate:[authGuard], component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }