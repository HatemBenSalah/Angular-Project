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
import { Intervention } from '../entity/Intervention';
import { InterventionService } from '../service/intervention.service';

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
  openAcceptedCommande:boolean=false;
  openAcceptedClaim:boolean=false;
  openIntervention:boolean=false;

  openclaim:boolean=false;

  employees: Employee[];

  ClaimToEdit:any={};
  InterventionToEdit:any={};

  savedToEditClaim:any={};
  savedToEditIntervention:any={};

  savedToEditEmployee:any={};
   refrech:boolean;
   options = [
     { name: "Plomberie", value: 1 },
     { name: "Jardinage", value: 2 },
     { name: "Plomberie", value: 3 },
     { name: "General masonry", value: 4 },
     { name: "Penture", value: 5 },
     { name: "Electricite", value: 6 },
     { name: "Charpenterie", value: 7 },
     { name: "Menage", value: 8 }
   ]
   email="";
   domaine="";
   Claims: Claim[];
   Interventions: Intervention[];
   CommandeID: Intervention[];

   commandes: Commande[];
   acceptedcommandes: Commande[];
   acceptedclaims: Claim[];
   acceptedinterventions: Intervention[];

   CommandeToEdit:any={};
   savedToEditCommande:any={};
   employee: Employee = new Employee();
   user:User =new User();


   constructor(private intervenrionService :InterventionService, private employeeService: EmployeeService,private CommandeService: CommandeService ,private registrationservice: RegistrationService,private ClaimService: ClaimService, private tokenStorageService :TokenStorageService) {}
 
   ngOnInit() {
     this.reloadData();
     this. email=localStorage.getItem('email');
    this.employee=this.tokenStorageService.getUser();
    this.domaine=this.employee.employeservice;
   }
 
   reloadData() {
    this.intervenrionService.getInterventionByEmployeeService(this.tokenStorageService.getUser().employeservice).subscribe(data => {
      this.Interventions = data;
    });
    this.intervenrionService.getInterventionbyemployeeId(this.tokenStorageService.getUser().id).subscribe(data => {
      this.acceptedinterventions = data;
    });
    this.ClaimService.getClaimByEmployeeService(this.tokenStorageService.getUser().employeservice).subscribe(data => {
      this.Claims = data;
    });
    this.ClaimService.getClaimbyemployeeId(this.tokenStorageService.getUser().id).subscribe(data => {
      this.acceptedclaims = data;
    });
     this.CommandeService.getCommandebyservice(this.tokenStorageService.getUser().employeservice).subscribe(data => {
       this.commandes = data;
     });

     this.CommandeService.getCommandebyemployee(this.tokenStorageService.getUser().id).subscribe(data => {
      this.acceptedcommandes = data;
    });


    
   
   }

   NavigateToCommande()
   {  this.submitted = false;
     this.openclaim=false;
     this.opencommandlist=true;
     this.editCommand=false;
     this.editclaim=false;
     this. openAcceptedCommande=false;
     this.openAcceptedClaim=false;
     this.openIntervention=false;


   }
   NavigateToClaim()
   {this.submitted = false;
     this.opencommandlist=false;
     this.openclaim=true;
     this.editCommand=false;
     this. openAcceptedCommande=false;
     this.openAcceptedClaim=false;
     this.openIntervention=false;

 
   }
   NavigateToEmployee()
   { this.submitted = false;
    this.opencommandlist=false;
    this.openclaim=false;
    this.editCommand=false;
    this. openAcceptedCommande=false;
    this.openAcceptedClaim=false;
    this.openIntervention=false;


   }
 NavigateToAcceptedCommande(){
  this.submitted = false;
  this.openclaim=false;
  this.opencommandlist=false;
  this.editCommand=false;
  this.editclaim=false;
 this. openAcceptedCommande=true;
 this.openAcceptedClaim=false;
 this.openIntervention=false;

 }
 NavigateToAcceptedClaim(){
  this.submitted = false;
  this.openclaim=false;
  this.opencommandlist=false;
  this.editCommand=false;
  this.editclaim=false;
 this. openAcceptedCommande=false;
 this.openAcceptedClaim=true;
 this.openIntervention=false;

 }
 NavigateToIntervention(){
  this.submitted = false;
  this.openclaim=false;
  this.opencommandlist=false;
  this.editCommand=false;
  this.editclaim=false;
 this. openAcceptedCommande=false;
 this.openAcceptedClaim=false;
 this.openIntervention=true;


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
     this.openIntervention=false;

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
      this.openIntervention=false;

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
  let localtime: Date = new Date();  
  this.savedToEditCommande =cm ;
  Object.assign(this.CommandeToEdit, cm);
  this.CommandeToEdit.state="Accepted";
  this.CommandeToEdit.acceptationdate=localtime;

  this.CommandeToEdit.employee=this.employee;
  this.CommandeService.updateCommande(this.CommandeToEdit).subscribe(data =>{
    this.reloadData();
  });

 }

 AcceptClaimd(cm){
  let localtime: Date = new Date();  
  this.savedToEditClaim =cm ;
  Object.assign(this.ClaimToEdit, cm);
  this.ClaimToEdit.state="Accepted";
  this.ClaimToEdit.acceptationdate=localtime;

  this.ClaimToEdit.employee=this.employee;

  
  this.ClaimService.updateClaim(this.ClaimToEdit).subscribe(data =>{
    this.reloadData();
  });

 }

 
 AcceptIntervention(cm){
  let localtime: Date = new Date();  
  
  this.savedToEditIntervention =cm ;
  Object.assign(this.InterventionToEdit, cm);
  this.InterventionToEdit.interventionstate="Done";
  this.InterventionToEdit.dateintervention=localtime;

  this.InterventionToEdit.employee=this.employee;
  this.InterventionToEdit.commande=cm;
  this.InterventionToEdit.acceptationdate=cm.acceptationdate;
  this.CommandeService.updateCommande(this.InterventionToEdit).subscribe(data =>{
  this.reloadData();
});
  this.intervenrionService.createIntervention(this.InterventionToEdit).subscribe(data =>{
    this.reloadData();
  });

 }

 AcceptInterventionClaim(cm){
  let localtime: Date = new Date();  
  
  this.savedToEditIntervention =cm ;
  Object.assign(this.InterventionToEdit, cm);
  this.InterventionToEdit.interventionstate="Done";
  this.InterventionToEdit.dateintervention=localtime;

  this.InterventionToEdit.employee=this.employee;
  this.InterventionToEdit.claim=cm;
  this.InterventionToEdit.acceptationdate=cm.acceptationdate;
  this.ClaimService.updateClaim(this.InterventionToEdit).subscribe(data =>{
  this.reloadData();
});
  this.intervenrionService.createIntervention(this.InterventionToEdit).subscribe(data =>{
    this.reloadData();
  });

 }
 
 Logout(){
  this.tokenStorageService.signOut();
  

}
}