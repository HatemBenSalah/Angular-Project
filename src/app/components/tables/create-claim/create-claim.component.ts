import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/entity/Claim';
import { ClaimService } from 'src/app/service/Claim.service';
import{User} from 'src/app/entity/User';
import { TokenStorageService } from 'src/app/service/TokenStorageService';
import { DatePipe } from '@angular/common'
import { Commande } from 'src/app/entity/Commande';

@Component({
  selector: 'app-create-Claim',
  templateUrl: './create-Claim.component.html',
  styleUrls: ['./create-Claim.component.css']
})
export class CreateClaimComponent implements OnInit {
  user: User = new User();
  commande:Commande=new Commande();
message:boolean;
  claim: Claim = new Claim ();
  options = [
    { name: "Plomberie", value: 1 },
    { name: "Jardinage", value: 2 },
    { name: "Paraboliste", value: 3 },
    { name: "General masonry", value: 4 },
    { name: "Penture", value: 5 },
    { name: "Electricite", value: 6 },
    { name: "Charpenterie", value: 7 },
     { name: "Menage", value: 8 }
  ]
  submitted = false;

  constructor(private ClaimService: ClaimService, private tokenStorageService :TokenStorageService) { }

  ngOnInit() {
    this.user =this.tokenStorageService.getUser();
    this.commande=this.tokenStorageService.getCommande();
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
    this.claim.state="In progress";
    this.claim.firstName=this.user.firstName;
    this.claim.lastName=this.user.lastName;
    this.claim.adresse=this.user.adresse;
    this.claim.email=this.user.email;
    this.claim.user=this.user;
    this.claim.commande=this.commande;
    this.ClaimService.createClaim(this.claim)
      .subscribe(data => {
        this.claim = new Claim();
      });
    
  }

  onSubmit() {
    if( this.claim.claimdescription==null|| this.claim.phone==null || this.claim.nameservice==null)
     {this.message=true; }
     else{
      this.submitted = true;
      this.save();
    }
  }
}