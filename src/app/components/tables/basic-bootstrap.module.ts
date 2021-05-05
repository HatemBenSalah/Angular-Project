import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicBootstrapRoutingModule } from './basic-bootstrap-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { CreateCommandeComponent } from './create-commande/create-commande.component';
import { CommandeListComponent } from './commande-list/commande-list.component';
import { ClaimListComponent } from './claim-list/Claim-list.component';
import { CreateClaimComponent } from './create-Claim/create-Claim.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  imports: [
    CommonModule,
    BasicBootstrapRoutingModule,
    SharedModule
  ],
  declarations: [
    
    CreateCommandeComponent,
    CommandeListComponent,
    ClaimListComponent,
    CreateClaimComponent,
    CreateEmployeeComponent,
    EmployeeListComponent]
})
export class BasicBootstrapModule { }
