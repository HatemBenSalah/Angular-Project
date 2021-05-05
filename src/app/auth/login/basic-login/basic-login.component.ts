import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/User';
import { TokenStorageService } from 'src/app/service/TokenStorageService';
import {LoginService} from'../../../service/login.service';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  user: User = new User();
  errorMessage ="";
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

  constructor(private authService: LoginService, private tokenStorageService: TokenStorageService , private router: Router/*,private toastr: ToastrService*/) { }

  ngOnInit(): void {
 
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
     }
     let isLoggedIn = this.authService.isLoggedInd();

     if (isLoggedIn) {
       this.router.navigate(['dashboard']);
     } 
  }

  checkLogin(): void {
   
    this.authService.login(this.user.email,this.user.password).subscribe(
      data => {
        console.log('basic-login: ', data);
        
        this.tokenStorageService.saveToken(data.accessToken);
        this.tokenStorageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorageService.getUser().roles;
        localStorage.setItem('email', this.user.email);
        this.router.navigate(['dashboard']);

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
   
  }
  

  reloadPage(): void {
    window.location.reload();
  }
}
 
