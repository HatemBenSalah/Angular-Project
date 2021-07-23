import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminComponent } from './login-admin.component';
import {SharedModule} from '../../shared/shared.module';
import { FormsModule }   from '@angular/forms';
import { BasicLoginAdminRoutingModule } from './basic-loginadmin-routing.module';
@NgModule({
  imports: [
    CommonModule,
    BasicLoginAdminRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [LoginAdminComponent]
})
export class BasicLoginAdminModule { }
