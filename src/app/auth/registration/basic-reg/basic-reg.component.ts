import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/TokenStorageService';
import {LoginService} from'../../../service/login.service';
import { User } from 'src/app/entity/User';
import { RegistrationService } from 'src/app/service/registration.service';
@Component({
  selector: 'app-basic-reg',
  templateUrl: './basic-reg.component.html',
  styleUrls: ['./basic-reg.component.scss']
})
export class BasicRegComponent implements OnInit {
  user: User = new User();
  message='';
  errorMessage="";
  isLoggedIn = false;
created:boolean;
 
  constructor(private authService: LoginService,private registrationservice: RegistrationService,private router:Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
     }
     let isLoggedIn = this.authService.isLoggedInd();

     if (isLoggedIn) {
       this.router.navigate(['dashboard']);
     } 
  }

  save() {
    if(this.user.cin && this.user.adresse && this.user.email && this.user.firstName 
      &&this.user.lastName &&(this.user.password.length>7) &&this.user.password ){
        this.message="";
    this.user.roles="client";
    this.registrationservice.register(this.user).subscribe(
      data=>{
        if(this.message.match("email already exists")===null)
        {
          this.router.navigate(['/auth/login']);

        }
     },
      error =>{
      //  this.message = error.error.message;
       // this.created=false
       this.message="email already exists";

      }
      );

      }

      else{
        this.message="Empty field";
      }
  }
  RegisterIn(){
    this.message="";
    this.save();
}
  
}