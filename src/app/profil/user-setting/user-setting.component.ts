import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/entity/User';
import { TokenStorageService } from 'src/app/service/TokenStorageService';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {
  user: User = new User();
  
  message="aa";
  constructor(private userservice :UserService, private tokenStorageService :TokenStorageService)  { }

  ngOnInit() {
    this.user=this.tokenStorageService.getUser();
    this.reloadData();
  }

  reloadData() {
    this.userservice.getUserbyId(this.user).subscribe(data => {
      this.user = data;
    });
    this.message=this.user.email;
      
  }
 

}
