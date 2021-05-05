import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/TokenStorageService';
import { UserService } from 'src/app/service/user.service';

import{User} from 'src/app/entity/User';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
firstname="";
lastname="";
CIN="";
phone="";
Location="";
email="";
user:User =new User();


Buttonvalue="";
ModifierFirstname:boolean=false;
ModifierLastname:boolean=false;
ModifierPassword:boolean=false;
ModifierLocation:boolean=false;
ModifierCIN:boolean=false;
ModifierPhone:boolean=false;
ModifierEmail:boolean=false;




  
  constructor(private userservice :UserService, private tokenStorageService :TokenStorageService)  { 

  }

  ngOnInit() 
  {
    
    this. reloadData();
  }

  reloadData() {
    this.user=this.tokenStorageService.getUser();
     console.log("hatem"+this.user.cin);
    this.firstname=this.user.firstName;
    this.lastname=this.user.lastName;
    this.Location=this.user.adresse;
    this.CIN=this.user.cin;
    this.phone=this.user.phone;
    this.email=this.user.email;      
  }
   save(){
     this.userservice.getUserbyId(this.user).subscribe(data => {
     this.user=data;   
   });
   this.tokenStorageService.saveUser(this.user);

   }
EditPhone()
{
    this.ModifierPhone=!this.ModifierPhone;
    this.userservice.updateUser(this.user).subscribe(data => {
    });
   
    this.save();
      this.reloadData();
}

 
Editfirstname(  ){
  this.ModifierFirstname=!this.ModifierFirstname;
  this.userservice.updateUser(this.user).subscribe(data => {
  });
 
  this.save();
    this.reloadData();
 
}
EditLastname(  ){
  this.ModifierLastname=!this.ModifierLastname;
  this.userservice.updateUser(this.user).subscribe(data => {
  });
 
  this.save();
    this.reloadData();
}
EditPasswordname(  ){
  this.ModifierPassword=!this.ModifierPassword;
  this.userservice.updateUser(this.user).subscribe(data => {
  });
 
  this.save();
    this.reloadData();
}
EditEmail(  ){
  this.ModifierEmail=!this.ModifierEmail;
  this.userservice.updateUser(this.user).subscribe(data => {
  });
 
  this.save();
    this.reloadData();
 
}
EditLocation(  ){
  this.ModifierLocation=!this.ModifierLocation;
  this.userservice.updateUser(this.user).subscribe(data => {
  });
 
  this.save();
    this.reloadData();
 
}
EditCIN(  ){
  this.ModifierCIN=!this.ModifierCIN;
  this.userservice.updateUser(this.user).subscribe(data => {
  });
 
  this.save();
    this.reloadData();
 
}


 
}
