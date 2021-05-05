import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
 
  constructor(private registrationservice: RegistrationService,private router:Router) { }

  ngOnInit() {
  }

  newUser(): void {
    this.user = new User();
  }

  save() {
    this.user.roles="client";
    this.registrationservice.register(this.user).subscribe(
      data=>{
        console.log("response recived");
     },
      error =>{
        console.log("exeption occured");
        this.message="email and password does not match.";
      
      }
    )

  
  }

 
  RegisterIn(){

    this.save();
    this.router.navigate(['/dashboard']);
  }
  
}