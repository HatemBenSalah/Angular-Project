import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entity/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
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
   employees: Employee[];
   EmployeeToEdit:any={};
   savedToEditEmployee:any={};
   
   constructor(private employeeService: EmployeeService) {}
 
   ngOnInit() {
     this.reloadData();
   }
 
   reloadData() {
     this.employeeService.getEmployee().subscribe(data => {
       this.employees = data;
     });
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
   {
     console.log(cm)
     this.savedToEditEmployee =cm ;
     Object.assign(this.EmployeeToEdit, cm);
     this.edition=true;
   }
   done(){
     console.log(this.EmployeeToEdit)
    
     console.log(this.savedToEditEmployee)
     this.edition=false;
     this.employeeService.updateEmployee(this.EmployeeToEdit).subscribe(data =>{
       if(data == true){
         let x = this.employees.indexOf(this.savedToEditEmployee);
         this.employees[x] = this.EmployeeToEdit;
       }else{
         console.log("ghalta")
       }
       
     });
 
   }
   
   

}
