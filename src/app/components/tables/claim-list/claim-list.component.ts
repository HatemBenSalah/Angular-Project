import { Observable } from "rxjs";
import { Component, OnInit,Input } from "@angular/core";
import { ClaimService } from 'src/app/service/Claim.service';
import { Claim } from 'src/app/entity/Claim';
import { TokenStorageService } from 'src/app/service/TokenStorageService';
import{User} from 'src/app/entity/User';
@Component({
  selector: "app-Claim-list",
  templateUrl: "./Claim-list.component.html",
  styleUrls: ["./Claim-list.component.css"]
})
export class ClaimListComponent implements OnInit {
 edition:boolean=false;
 edition2:boolean=false;
  refrech:boolean;
  options = [
    { name: "Plomberie", value: 1 },
    { name: "Jardinage", value: 2 },
    { name: "Plomberie", value: 3 },
    { name: "Maçonnerie générale", value: 4 },
    { name: "Penture", value: 5 },
    { name: "Électricité", value: 6 }
  ]
  Claims: Claim[];
  ClaimToEdit:any={};
  savedToEditClaim:any={};
  user:User =new User();

  
  constructor(private ClaimService: ClaimService, private tokenStorageService :TokenStorageService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.ClaimService.getClaim(this.tokenStorageService.getUser().id).subscribe(data => {
      this.Claims = data;
    });
  }

  deleteClaim(id: number) {
   this.refrech=true;
    this.ClaimService.deleteClaim(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        });
  }
  EditClaim(cm)
  {
    console.log(cm)
    this.savedToEditClaim =cm ;
    Object.assign(this.ClaimToEdit, cm);
    this.edition=true;
    this.ClaimService.updateClaim(this.ClaimToEdit).subscribe(data =>{
      if(data == true){
        let x = this.Claims.indexOf(this.savedToEditClaim);
        this.Claims[x] = this.ClaimToEdit;
      }else{
        console.log("ghalta")
      }
      
    });
    

  }
 

  
  
  
}
