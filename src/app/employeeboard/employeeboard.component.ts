import { Claim } from 'src/app/entity/Claim';
import { ClaimService } from 'src/app/service/Claim.service';
import { RegistrationService } from 'src/app/service/registration.service';
import { Employee } from 'src/app/entity/Employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { Observable } from "rxjs";
import { Component, OnInit,Input } from "@angular/core";
import { CommandeService } from 'src/app/service/commande.service';
import { Commande } from 'src/app/entity/Commande';
import { TokenStorageService } from 'src/app/service/TokenStorageService';
import{User} from 'src/app/entity/User';

@Component({
  selector: 'app-employeeboard',
  templateUrl: './employeeboard.component.html',
  styleUrls: ['./employeeboard.component.css']
})
export class EmployeeboardComponent implements OnInit {
  submitted = false;
  editclaim:boolean=false;
  editCommand:boolean=false;
  opencommandlist:boolean=true;
  openclaim:boolean=false;

  employees: Employee[];

  ClaimToEdit:any={};
  savedToEditClaim:any={};
  savedToEditEmployee:any={};
   refrech:boolean;
   options = [
     { name: "Plomberie", value: 1 },
     { name: "Jardinage", value: 2 },
     { name: "Plomberie", value: 3 },
     { name: "Maçonnerie générale", value: 4 },
     { name: "Penture", value: 5 },
     { name: "Électricité", value: 6 }
   ]
   email="";
   Claims: Claim[];
 
   commandes: Commande[];
   CommandeToEdit:any={};
   savedToEditCommande:any={};
   user:User =new User();
   employee: Employee = new Employee();

   constructor(private employeeService: EmployeeService,private CommandeService: CommandeService ,private registrationservice: RegistrationService,private ClaimService: ClaimService, private tokenStorageService :TokenStorageService) {}
 
   ngOnInit() {
     this.reloadData();
     this. email=localStorage.getItem('email');
 
   }
 
   reloadData() {
    
    this.ClaimService.getallClaim().subscribe(data => {
      this.Claims = data;
    });
     this.CommandeService.getAllCommande().subscribe(data => {
       this.commandes = data;
     });
     this.employeeService.getEmployee().subscribe(data => {
      this.employees = data;
    });
   }
   NavigateToCommande()
   {  this.submitted = false;
     this.openclaim=false;
     this.opencommandlist=true;
     this.editCommand=false;

   }
   NavigateToClaim()
   {this.submitted = false;
     this.opencommandlist=false;
     this.openclaim=true;
     this.editCommand=false;

 
   }
   NavigateToEmployee()
   { this.submitted = false;
    this.opencommandlist=false;
    this.openclaim=false;

    this.editCommand=false;

   }
 
   deleteCommande(id: number) {
    
     this.CommandeService.deleteCommande(id)
       .subscribe(
         data => {
           console.log(data);
           this.reloadData();
         });
   }
   EditCommande(cm)
   {
     console.log(cm)
     this.savedToEditCommande =cm ;
     Object.assign(this.CommandeToEdit, cm);
     this.editCommand=true;
     this.opencommandlist=false;
   }
   done(){
     console.log(this.CommandeToEdit)
    
     console.log(this.savedToEditCommande)
     this.editCommand=false;
     this.opencommandlist=true;
     this.CommandeService.updateCommande(this.CommandeToEdit).subscribe(data =>{
       if(data == true){
         let x = this.commandes.indexOf(this.savedToEditCommande);
         this.commandes[x] = this.CommandeToEdit;
       }else{
         console.log("ghalta")
       }
       
     });
 
   }
   deleteClaim(id: number) {
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
       this.openclaim=false;
      this.editclaim=true;
      this.savedToEditClaim =cm ;
      Object.assign(this.ClaimToEdit, cm);
     
 }
 doneClaim(){
  this.editCommand=false;
  this.editclaim=false;
  this.openclaim=true;

  this.ClaimService.updateClaim(this.ClaimToEdit).subscribe(data =>{
    if(data == true){
      let x = this.Claims.indexOf(this.savedToEditClaim);
      this.Claims[x] = this.ClaimToEdit;
    }else{
      console.log("ghalta")
    }
    
  });

} 
cancelCommande() {
  this.editCommand=false;
  this.opencommandlist=true;
}
cancelClaim(){
  this.editclaim=false;
  this.openclaim=true;
}
AcceptCommand(cm){
  this.savedToEditCommande =cm ;
  Object.assign(this.CommandeToEdit, cm);
  this.CommandeToEdit.state="Accepted"
  
  this.CommandeService.updateCommande(this.CommandeToEdit).subscribe(data =>{
    this.reloadData();
  });

 }
 Logout(){
  this.tokenStorageService.signOut();
  

}
}