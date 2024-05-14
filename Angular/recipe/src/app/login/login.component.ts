import { Component, OnInit } from '@angular/core';
import {NgToastService} from 'ng-angular-popup'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  emailId: string;
  password: string;
   mobile:any;

  constructor(private toast : NgToastService) {
    this.emailId = "";
    this.password = "";
     this.mobile= "";
  }

  loginSubmit(loginForm: any) {
    console.log(loginForm);

    // if (loginForm.value.emailId == "HR" && loginForm.value.password == "HR") {

    if (loginForm.emailId == "HR" && loginForm.password == "HR") {
      console.log('Login Success');
      this.toast.success({detail:"Success Message",summary:"Login Success",duration:5000})
    } else {
      console.log("Invalid Credentials")
      this.toast.error({detail:"Error Message",summary:"Invalid Credentials",duration:5000})
    }

  }


  
}