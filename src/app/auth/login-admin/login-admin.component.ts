import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/entity/Admin';
import { TokenStorageService } from 'src/app/service/TokenStorageService';
import {LoginService} from'../../service/login.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  admin: Admin = new Admin();
  errorMessage ="";

  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

  constructor(private authService: LoginService, private tokenStorageService: TokenStorageService , private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
     }
     let isLoggedIn = this.authService.isLoggedInd();

     if (isLoggedIn) {
       this.router.navigate(['admin']);
     } 
  }

  checkLogin(): void {
    this.authService.loginAdmin(this.admin.email,this.admin.password).subscribe(
      data => {
        console.log('basic-login: ', data);
        
        this.tokenStorageService.saveToken(data.accessToken);
        this.tokenStorageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorageService.getUser().roles;
        localStorage.setItem('email', this.admin.email);
        this.router.navigate(['admin']);

      },
      err => {
        this.errorMessage = "Email or password incorrect ";
        this.isLoginFailed = true;
      }
    );
   
  }
  
  

  reloadPage(): void {
    window.location.reload();
  }
}
 
