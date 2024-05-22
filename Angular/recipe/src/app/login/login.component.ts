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



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent  implements OnInit{
  protected aFormGroup!: FormGroup;
  siteKey: string;

  emailId: string;
  password: string;
  // mobile: any;
  captchaResponse: string;
 

  constructor(private toast: NgToastService,private router:Router,private formBuilder:FormBuilder) {
    this.siteKey = "6LeQPd4pAAAAAOwJFqx3fsIBYiyFSfdQlo79XZop";
    this.emailId = "";
    this.password = "";
    // this.mobile = "";
    this.captchaResponse = "";
  }
  

  loginSubmit(loginForm: any) {
    console.log(loginForm);

    if (loginForm.emailId == "harsha@gmail.com" && loginForm.password == "Harsha@123" || loginForm.emailId == "vamsi@gmail.com" && loginForm.password == "Vamsi@27" || loginForm.emailId == "admin@gmail.com" && loginForm.password == "Admin@123") {
      console.log('Login Success');
      this.toast.success({ detail: "Success Message", summary: "Login Success", duration: 5000 })
      this.router.navigate(['home']);

    } else {
      console.log("Invalid Credentials")
      this.toast.error({ detail: "Error Message", summary: "Invalid Credentials", duration: 5000 })

    }
  }
  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
}
}