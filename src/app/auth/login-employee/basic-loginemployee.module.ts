import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import { FormsModule }   from '@angular/forms';
import { BasicLoginEmployeeRoutingModule } from './basic-loginemployee-routing.module';
import { LoginEmployeeComponent } from './login-employee.component';
@NgModule({
  imports: [
    CommonModule,
    BasicLoginEmployeeRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [LoginEmployeeComponent]
})
export class BasicLoginEmployeeModule { }
