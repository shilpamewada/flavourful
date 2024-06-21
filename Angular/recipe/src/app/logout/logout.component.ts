
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'] // Corrected styleUrls
})
export class LogoutComponent {

  constructor(private service: UserService, private router: Router) {}

  ngOnInit() {
    console.log("Successfully Logged Out!!!");

    // Clears the LocalStorage Data
    localStorage.removeItem('emailId');
    localStorage.clear();

    this.service.setUserLoggedOut();
    this.router.navigate(['/login']);
  }
}

