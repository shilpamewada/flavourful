import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(private service: UserService, private router: Router) {
    alert("Successfully Logged Out!!!");

    //Clears the LocalStorage Data
    localStorage.removeItem('emailId');
    localStorage.clear();

    this.service.setUserLoggedOut();
    this.router.navigate(['']);
  }
}
