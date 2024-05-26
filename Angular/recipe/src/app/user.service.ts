// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

// export class UserService {
//   // login(loginform: any) {
//   //   throw new Error('Method not implemented.');
//   // }
//   isUserLoggedIn: boolean;
//   loginStatus: any;


//   constructor(private http: HttpClient) {
//     this.isUserLoggedIn = false;
//     this.loginStatus = new Subject();
//   }
  
//   setUserLoggedIn() {
//     this.isUserLoggedIn = true;
//     this.loginStatus.next(true);
//   }
//   setUserLoggedOut() {
//     this.isUserLoggedIn = false;
//     this.loginStatus.next(false);
//   }
//   getLoginStatus(): boolean {
//     return this.isUserLoggedIn;
//   }
//   getUserLoginStatus(): any {
//     return this.loginStatus.asObservable();
//   }


//   //User CRUD Operations
//   //------------------------

//   getAllUsers() {
//     return this.http.get('http://localhost:8085/getAllUsers');
//   }
//   registerUser(user: any) {
//     return this.http.post('http://localhost:8085/addUser', user);
//   }
//   userLogin(emailId: any, password: any) {
//     return this.http.get('http://localhost:8085/userLogin/' + emailId + "/" + password).toPromise()
//   }

//   getUserById(userId: any) {
//     return this.http.get('http://localhost:8085/getUserById/' + userId).toPromise();
//   }
//   deleteUserById(userId: any) {
//     return this.http.delete('http://localhost:8085/deleteUserById/' + userId);
//   }
//   updateUser(user: any) {
//     return this.http.put('http://localhost:8085/updateUser', user);
//   }

//   getAllCountries() {
//     return this.http.get('https://restcountries.com/v3.1/all');
//   }
// }



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  logout() {
    throw new Error('Method not implemented.');
  }
  // login(loginform: any) {
  //   throw new Error('Method not implemented.');
  // }
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


  //User CRUD Operations
  //------------------------

  getAllUsers() {
    return this.http.get('http://localhost:8085/getAllUsers');
  }
  registerUser(user: any) {
    return this.http.post('http://localhost:8085/addUser', user);
  }
  userLogin(emailId: any, password: any) {
    return this.http.get('http://localhost:8085/userLogin/' + emailId + "/" + password).toPromise()
  }

  getUserById(userId: any) {
    return this.http.get('http://localhost:8085/getUserById/' + userId).toPromise();
  }
  deleteUserById(userId: any) {
    return this.http.delete('http://localhost:8085/deleteUserById/' + userId);
  }
  updateUser(user: any) {
    return this.http.put('http://localhost:8085/updateUser', user);
  }

  getAllCountries() {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  private apiUrl = 'http://localhost:8085/recipes';

  // saveRecipe(user: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, user);
  // }

  saveRecipe(recipe: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addRecipe`, recipe);
  }

  // saveRecipe(recipe: any): Observable<any> {
  //   return this.http.post(this.apiUrl, recipe);
  // }
  

  // getAllRecipes(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  getAllRecipes() {
    return this.http.get('http://localhost:8085/recipes/getAllRecipes');
  }

 

 
}


