import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { EmployeeboardComponent } from './employeeboard.component';
import { EmployeeBoardRoutingModule } from './employeeboard-routing.module';




@NgModule({
  declarations: [EmployeeboardComponent],
  imports: [EmployeeBoardRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class EmployeeBoardModule { }
