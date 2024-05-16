import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  user: any;
  countries: any;
  confirmPassword: any;


  constructor(private service: UserService,private router:Router) {

    this.user = {
      userName: '',
      gender: '',
      country: '',
      mobileNum: '',
      emailId: '',
      password: '',
      confirmPassword: ''

    }
  }

  ngOnInit() {
    this.service.getAllCountries().subscribe((data: any) => { this.countries = data; });
  }


  submit() {
    if (this.user.password !== this.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
  
    console.log(this.user);
    this.service.registerUser(this.user).subscribe((data: any) => {
      console.log(data);
    });
    console.log("Registration successful");
    this.router.navigate(['home']);
    
  }

}