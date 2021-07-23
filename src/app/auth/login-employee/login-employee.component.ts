import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/entity/Employee';
import { TokenStorageService } from 'src/app/service/TokenStorageService';
import {LoginService} from'../../service/login.service';


@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
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
       this.router.navigate(['employee']);
     } 
  }

  checkLogin(): void {
    this.authService.loginEmployee(this.employee.email,this.employee.password).subscribe(
      data => {
        console.log('basic-login: ', data);
        
        this.tokenStorageService.saveToken(data.accessToken);
        this.tokenStorageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorageService.getUser().roles;
        localStorage.setItem('email', this.employee.email);
        this.router.navigate(['employee']);

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
 
