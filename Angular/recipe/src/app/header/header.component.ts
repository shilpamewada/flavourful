// import { Component } from '@angular/core';
// import { UserService } from '../user.service';


// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
//   isUserLoggedIn: boolean;
  

//   constructor(private userservice:UserService) {
//     // Initialize isLoggedIn to false
//     this.isUserLoggedIn = false;

//     // Subscribe to user login status changes
//     this.userservice.loginStatus.subscribe((loginStatus: boolean) => { // Specify the type of status
//       this.isUserLoggedIn = loginStatus;
//     });
//   }

//   logout() {
//     // Call the logout function from UserService
//     this.userservice.logout();
//   }
// }



import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  loginStatus: any;
 

  constructor(private service:UserService) {}

  
  ngOnInit() {
    this.service.getUserLoginStatus().subscribe((data: any) => {
      this.loginStatus = data;
    });

 
  }
  
}