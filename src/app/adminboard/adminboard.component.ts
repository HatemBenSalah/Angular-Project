
import { Claim } from 'src/app/entity/Claim';
import { ClaimService } from 'src/app/service/Claim.service';
import { RegistrationService } from 'src/app/service/registration.service';
import { Employee } from 'src/app/entity/Employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { Component, OnInit,Input } from "@angular/core";
import { CommandeService } from 'src/app/service/commande.service';
import { Commande } from 'src/app/entity/Commande';
import { TokenStorageService } from 'src/app/service/TokenStorageService';
import{User} from 'src/app/entity/User';
@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements OnInit {
  message="";
  emptyfild=false;
  submitted = false;
  editEmployee:boolean=false;
  editcommand:boolean=false;
  editclaim:boolean=false;
  ClaimToEdit:any={};
  savedToEditClaim:any={};
  openCommandList:boolean=true;
  openClaimList:boolean=false;
  openEmployeeList:boolean=false;
  addemploye:boolean=false;
  employees: Employee[];
  EmployeeToEdit:any={};
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
   Claims: Claim[];
 
   commandes: Commande[];
   CommandeToEdit:any={};
   savedToEditCommande:any={};
   user:User =new User();
   employee: Employee = new Employee();

   constructor(private employeeService: EmployeeService,private CommandeService: CommandeService ,private registrationservice: RegistrationService,private ClaimService: ClaimService, private tokenStorageService :TokenStorageService) {}
 
   ngOnInit() {
   this.reloadData();
    
   }
 
   reloadData() {
    this. email=localStorage.getItem('email');
    
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
   { 
    this.addemploye=false;
     this.openClaimList=false;
     this.openEmployeeList=false;
     this.openCommandList=true;
     this.editcommand=false;
     this.editEmployee=false;


   }
   NavigateToClaim()
   {this.submitted = false;
    this.openEmployeeList=false;
     this.openCommandList=false;
     this.openClaimList=true;
     this.addemploye=false;
     this.editcommand=false;
     this.editEmployee=false;


 
   }
   NavigateToEmployee()
   { this.submitted = false;
    this.openCommandList=false;
    this.openClaimList=false;
    this.openEmployeeList=true;
    this.addemploye=false
    this.editcommand=false;
    this.editEmployee=false;


   }
 
   deleteCommande(id: number) {
    this.refrech=true;
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
     this.editcommand=true;
     this.openCommandList=false;
   }
   doneCommand(){
     console.log(this.CommandeToEdit)
    
     console.log(this.savedToEditCommande)
     this.editcommand=false;
     this.openCommandList=true;
     this.CommandeService.updateCommande(this.CommandeToEdit).subscribe(data =>{
       if(data == true){
         let x = this.commandes.indexOf(this.savedToEditCommande);
         this.commandes[x] = this.CommandeToEdit;
       }else{
         console.log("ghalta")
       }
       
     });
 
   }
   doneClaim(){
    console.log(this.ClaimToEdit)
   
    console.log(this.savedToEditClaim)
    this.editclaim=false
    this.openClaimList=true;
    this.ClaimService.updateClaim(this.ClaimToEdit).subscribe(data =>{
      if(data == true){
        let x = this.Claims.indexOf(this.savedToEditClaim);
        this.Claims[x] = this.ClaimToEdit;
      }else{
        console.log("ghalta")
      }
      
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
       this.openClaimList=false;
      this.editclaim=true;
      
    this.savedToEditClaim =cm ;
    Object.assign(this.ClaimToEdit, cm);
   
 }

 deleteEmployee(id: number) {
  this.refrech=true;
   this.employeeService.deleteEmployee(id)
     .subscribe(
       data => {
         console.log(data);
         this.reloadData();
       });
 }
 EditEmployee(cm)
 {   this.editEmployee=true;

   console.log(cm)
   this.savedToEditEmployee =cm ;
   Object.assign(this.EmployeeToEdit, cm);
   this.openEmployeeList=false;

  
 }
 doneEmploye(){
   console.log(this.EmployeeToEdit)
   console.log(this.savedToEditEmployee)

   this.editEmployee=false;
   this.openEmployeeList=true;
   this.employeeService.updateEmployee(this.EmployeeToEdit).subscribe(data =>{
     if(data == true){
       let x = this.employees.indexOf(this.savedToEditEmployee);
       this.employees[x] = this.EmployeeToEdit;
     }else{
       console.log("ghalta")
     }
     
   });

 }
 addEmployee(){
   this.openEmployeeList=false;
   this.addemploye=true;

 }
 saveEmployee() {
  this.employee.roles="employee";
  this.registrationservice.registerEmployee(this.employee)
    .subscribe(data => {
      if(data==false)
      {
        this.message="Error: Email is already in use!";
      }
   else
   {
     this.message=null;
     this.emptyfild=false;
     this.addemploye=false;
     this.openEmployeeList=true;
     this.message=null;
   }
  })
 this.reloadData();
 }   


/*saveEmployee() {
  this.employee.roles="employee";
  this.registrationservice.registerEmployee(this.employee)
    .subscribe(data => {
    }, error =>{
      this.message = error.error.message;
      {
      }
    });
  this.reloadData();
   
}
*/
onSubmitemployee() {
  if(this.employee.employeservice ==null|| this.employee.email ==null|| this.employee.firstName==null || this.employee.lastName==null 
    || this.employee.password==null|| this.employee.cin==null || this.employee.phone==null )
     {
       this.emptyfild=true;
     }

   else {
         this.emptyfild=false;
         this.saveEmployee(); 
        
         if(this.message==null){
                 this.emptyfild=false;
                 this.addemploye=false;
                 this.openEmployeeList=true;
    }
   
    this.reloadData();

   }
}
cancelCommand(){
  this.editcommand=false;
  this.openCommandList=true;
}
cancelClaim(){
  this.editclaim=false;
  this.openClaimList=true;
}
cancelCreateEmployee(){
  this.addemploye=false;
  this.openEmployeeList=true;
}
cancelEditEmployee(){
  this.editEmployee=false;
  this.openEmployeeList=true;
}
Logout(){
  this.tokenStorageService.signOut();
  

}
 }
 