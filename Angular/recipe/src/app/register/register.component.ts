import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {
  user:any;
  service: any;
  countries: any;
  constructor() {
    this.user= {
      userName: '',
      gender:'',
      country:'',
      mobileNum:'',
      emailId:'',
      password:'',
    };
  }
  ngOnInit(): void {
    this.service.getAllContries().subscribe((data: any) => { this.countries = data; });
    
  }
  submit() {
    console.log(this.user);
    this.service.registerUser(this.user).subscribe((data: any) => {
      console.log(data);
    });
  }
 

}