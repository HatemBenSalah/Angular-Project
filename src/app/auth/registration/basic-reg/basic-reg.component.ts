import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/User';
import { UserService } from '../../../service/user.service';
@Component({
  selector: 'app-basic-reg',
  templateUrl: './basic-reg.component.html',
  styleUrls: ['./basic-reg.component.scss']
})
export class BasicRegComponent implements OnInit {
  user: User = new User();
  submitted = false;
 
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    sessionStorage.setItem("Firstname",this.user.firstName);
    sessionStorage.setItem("Lastname",this.user.lastName);
    sessionStorage.setItem("CIN",this.user.cin);
    sessionStorage.setItem("Phone",this.user.phone);
    sessionStorage.setItem("Useremail",this.user.email);
    sessionStorage.setItem("Adresse",this.user.adresse);
    sessionStorage.setItem("password",this.user.adresse);



    this.userService.createUser(this.user)
      .subscribe(data => {
        this.user = new User();
      });
    
  }

 
  RegisterIn(){
    this.submitted = true;
    this.save();
    this.router.navigate(['/dashboard']);
  }
  
}