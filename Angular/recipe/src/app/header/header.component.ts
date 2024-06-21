

// import { Component } from '@angular/core';
// import { UserService } from '../user.service';


// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
 
//   loginStatus: any;
 

//   constructor(private service:UserService) {}

  
//   ngOnInit() {
//     this.service.getUserLoginStatus().subscribe((data: any) => {
//       this.loginStatus = data;
//     });

 
//   }
  
// }

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginStatus: any;

  constructor(private service: UserService, private router: Router) {}

  ngOnInit() {
    this.service.getUserLoginStatus().subscribe((data: boolean) => {
      this.loginStatus = data;
    });
  }

  logout() {
    this.router.navigate(['/logout']); // Navigates to the logout component
  }
}
