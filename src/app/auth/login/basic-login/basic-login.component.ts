import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from'../basic-login/login.service';
@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  Nuageuser=false;

  constructor(private routeur:Router,private loginservice: LoginService) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  username = 'hatembensalh@gmail.com'
  password = 'kaka0000'
  invalidLogin = false
  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.routeur.navigate(['dashboard'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
}