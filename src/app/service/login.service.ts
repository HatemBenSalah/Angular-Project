import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
public   username;
  constructor() { }
  authenticate(username, password) {
    if (username === "hatembensalh@gmail.com" && password === "kaka0000") {
      sessionStorage.setItem("Useremail",this.username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
