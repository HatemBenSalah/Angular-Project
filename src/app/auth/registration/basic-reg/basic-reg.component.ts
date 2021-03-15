import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserService } from './user.service';
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
    this.userService.createUser(this.user)
      .subscribe(data => {
        this.user = new User();
      });
    
  }

 
  signIn(){
    this.submitted = true;
    this.save();
    this.router.navigate(['/auth/login']);
  }
  
}