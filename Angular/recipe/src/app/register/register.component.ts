import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Note the correct property name "styleUrls" instead of "styleUrl"
})
export class RegisterComponent implements OnInit {

  user: any;
  countries: any;

  constructor(private service: UserService, private router: Router) {
    this.user = {
      userName: '',
      gender: '',
      country: '',
      mobileNum: '',
      emailId: '',
      password: ''
    }
  }

  ngOnInit() {
    this.service.getAllCountries().subscribe((data: any) => { this.countries = data; });
  }

  submit() {
    console.log(this.user);
    this.service.registerUser(this.user).subscribe((data: any) => {
      console.log(data);
    });
    console.log("Registration successful");
    this.router.navigate(['home']);
  }
}