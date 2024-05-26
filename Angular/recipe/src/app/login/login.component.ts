



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { NgToastService } from 'ng-angular-popup';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']

// })
// export class LoginComponent  implements OnInit{
//   protected aFormGroup!: FormGroup;
//   siteKey: string;

//   emailId: string;
//   password: string;
//   // mobile: any;
//   captchaResponse: string;
 

//   constructor(private toast: NgToastService,private router:Router,private formBuilder:FormBuilder) {
//     this.siteKey = "6LeQPd4pAAAAAOwJFqx3fsIBYiyFSfdQlo79XZop";
//     this.emailId = "";
//     this.password = "";
//     // this.mobile = "";
//     this.captchaResponse = "";
//   }
  

//   loginSubmit(loginForm: any) {
//     console.log(loginForm);

//     if (loginForm.emailId == "admin@gmail.com" && loginForm.password == "Admin@123") {
//       console.log('Login Success');
//       this.toast.success({ detail: "Success Message", summary: "Login Success", duration: 5000 })
//       this.router.navigate(['home']);

//     } else {
//       console.log("Invalid Credentials")
//       this.toast.error({ detail: "Error Message", summary: "Invalid Credentials", duration: 5000 })

//     }
//   }
//   ngOnInit(): void {
//     this.aFormGroup = this.formBuilder.group({
//       recaptcha: ['', Validators.required]
//     });
// }
// }



import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  user: any;
    protected aFormGroup!: FormGroup;
  siteKey: string;

  emailId: string;
  password: string;
  captchaResponse: string;

  constructor(private toast: NgToastService,private service: UserService, private router: Router,private formBuilder:FormBuilder) {

        this.siteKey = "6LeQPd4pAAAAAOwJFqx3fsIBYiyFSfdQlo79XZop";
    this.emailId = "";
    this.password = "";
    this.captchaResponse = "";
  }

  async loginSubmit(loginForm: any) {
    console.log(loginForm);

    //Setting EmailId under LocalStorage
    localStorage.setItem('emailId', loginForm.emailId);

    if (loginForm.emailId == "HR" && loginForm.password == "HR") {

      this.service.setUserLoggedIn();
      this.router.navigate(['']);

    } else {
      
      await this.service.userLogin(loginForm.emailId, loginForm.password).then((data: any) => {
        console.log(data);
        this.user = data;
      });

      if (this.user != null) {
        
        console.log('Login Success');
      this.toast.success({ detail: "Success Message", summary: "Login Success", duration: 5000 })
      this.router.navigate(['home']);

        this.service.setUserLoggedIn();
        this.router.navigate(['home']);

      } else {
        console.log("Invalid Credentials")
        this.toast.error({ detail: "Error Message", summary: "Invalid Credentials", duration: 5000 })
      }
     
    }

  }
    ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
}
}