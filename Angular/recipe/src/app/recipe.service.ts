
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceipeService {

  isUserLoggedIn: boolean;
  loginStatus: any;
  

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
    this.loginStatus = new Subject();
  }
  
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
    this.loginStatus.next(true);
  }
  setUserLoggedOut() {
    this.isUserLoggedIn = false;
    this.loginStatus.next(false);
  }
  getLoginStatus(): boolean {
    return this.isUserLoggedIn;
  }
  getUserLoginStatus(): any {
    return this.loginStatus.asObservable();
  }

 
  getAllUsers() {
    return this.http.get('http://localhost:8085/getAllUsers');
  }

  updateUser(user: any) {
    return this.http.put('http://localhost:8085/updateUser', user);
  }

  registerUser(user: any) {
    return this.http.post('http://localhost:8085/addUser',user);
}

getAllContries() {
  return this.http.get('https://restcountries.com/v3.1/all');
}

}

