import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(private service: EmpService, private router: Router) {
    alert("Successfully Logged Out!!!");

    //Clears the LocalStorage Data
    localStorage.removeItem('emailId');
    localStorage.clear();

    this.service.setUserLoggedOut();
    this.router.navigate(['']);
  }
}
