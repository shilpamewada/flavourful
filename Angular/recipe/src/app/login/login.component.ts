
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { NgToastService } from 'ng-angular-popup';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']

// })
// export class LoginComponent  {

//   emailId: string;
//   password: string;
//   mobile: any;
 

//   constructor(private toast: NgToastService,private router:Router) {
//     this.emailId = "";
//     this.password = "";
//     this.mobile = "";
//   }

//   loginSubmit(loginForm: any) {
//     console.log(loginForm);

//     if (loginForm.emailId == "admin@gmail.com" && loginForm.password == "123") {
//       console.log('Login Success');
//       this.toast.success({ detail: "Success Message", summary: "Login Success", duration: 5000 })
//       this.router.navigate(['home']);

//     } else {
//       console.log("Invalid Credentials")
//       this.toast.error({ detail: "Error Message", summary: "Invalid Credentials", duration: 5000 })

//     }
//   }
// }



import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgxCaptchaModule, ReCaptcha2Component } from 'ngx-captcha'; // Correct import

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('captchaElem') captchaElem!: ReCaptcha2Component; // Initialize property with ! operator

  emailId: string;
  password: string;
  mobile: any;
  captchaResponse: string;

  constructor(private toast: NgToastService, private router: Router) {
    this.emailId = "";
    this.password = "";
    this.mobile = "";
    this.captchaResponse = "";
  }

  loginSubmit(loginForm: any) {
    if (this.captchaElem && this.captchaElem.getResponse()) {
      console.log(loginForm);

      if (loginForm.emailId == "admin@gmail.com" && loginForm.password == "123") {
        console.log('Login Success');
        this.toast.success({ detail: "Success Message", summary: "Login Success", duration: 5000 });
        this.router.navigate(['home']);

      } else {
        console.log("Invalid Credentials");
        this.toast.error({ detail: "Error Message", summary: "Invalid Credentials", duration: 5000 });

      }
    } else {
      console.log("Please complete the CAPTCHA");
      this.toast.error({ detail: "Error Message", summary: "CAPTCHA Validation", duration: 5000 });
    }
  }
}

