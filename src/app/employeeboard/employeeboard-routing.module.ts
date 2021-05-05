import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeboardComponent } from './employeeboard.component';
const routes: Routes = [
    {
      path: '',
      component: EmployeeboardComponent
      
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EmployeeBoardRoutingModule { }
  