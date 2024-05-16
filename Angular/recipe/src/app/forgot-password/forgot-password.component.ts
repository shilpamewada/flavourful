// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-forgot-password',
//   templateUrl: './forgot-password.component.html',
//   styleUrl: './forgot-password.component.css'
// })
// export class ForgotPasswordComponent {

// }


// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-forgot-password',
// //   templateUrl: './forgot-password.component.html',
// //   styleUrl: './forgot-password.component.css'
// // })
// // export class ForgotPasswordComponent {

// // }

// // forgot-password.component.ts
// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-forgot-password',
//   templateUrl: './forgot-password.component.html',
//   styleUrls: ['./forgot-password.component.css']
// })
// export class ForgotPasswordComponent {
//   email: string | undefined;

//   constructor(private userService: UserService) { }

//   submitForgotPasswordForm() {
//     this.userService.forgotPassword(this.email)
//       .subscribe(
//         () => {
//           // Handle success, show message to user
//           console.log("Reset password email sent successfully!");
//         },
//         (error: any) => {
//           // Handle error, show error message to user
//           console.error("Error sending reset password email:", error);
//         }
//       );
//   }
// }

