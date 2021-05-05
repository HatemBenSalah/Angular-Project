import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entity/Employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
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

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  newEmployee(): void {
   
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => {
        this.employee = new Employee();
      });
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}