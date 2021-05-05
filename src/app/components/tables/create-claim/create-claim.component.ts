import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/entity/Claim';
import { ClaimService } from 'src/app/service/Claim.service';
import{User} from 'src/app/entity/User';
import { TokenStorageService } from 'src/app/service/TokenStorageService';

@Component({
  selector: 'app-create-Claim',
  templateUrl: './create-Claim.component.html',
  styleUrls: ['./create-Claim.component.css']
})
export class CreateClaimComponent implements OnInit {
  user: User = new User();

  claim: Claim = new Claim ();
  options = [
    { name: "Plomberie", value: 1 },
    { name: "Jardinage", value: 2 },
    { name: "Paraboliste", value: 3 },
    { name: "Maçonnerie générale", value: 4 },
    { name: "Penture", value: 5 },
    { name: "Électricité", value: 6 },
    { name: "Charpenterie", value: 7 }
  ]
  submitted = false;

  constructor(private ClaimService: ClaimService, private tokenStorageService :TokenStorageService) { }

  ngOnInit() {
    this.user =this.tokenStorageService.getUser();

  }

  newClaim(): void {
    this.user=this.tokenStorageService.getUser();

    this.claim.nameservice=localStorage.getItem('servicename');
    this.submitted = false;
    this.claim = new Claim();
  }

  save() {
    let localtime: Date = new Date();  
    this.claim.datedemmande=localtime;

    this.claim.user=this.user;
    this.ClaimService.createClaim(this.claim)
      .subscribe(data => {
        this.claim = new Claim();
      });
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}