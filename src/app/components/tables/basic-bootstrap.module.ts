import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicBootstrapRoutingModule } from './basic-bootstrap-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { CreateCommandeComponent } from './create-commande/create-commande.component';
import { CommandeDetailsComponent } from './commande-details/commande-details.component';
import { CommandeListComponent } from './commande-list/commande-list.component';

@NgModule({
  imports: [
    CommonModule,
    BasicBootstrapRoutingModule,
    SharedModule
  ],
  declarations: [
    
    CreateCommandeComponent,
    CommandeDetailsComponent,
    CommandeListComponent]
})
export class BasicBootstrapModule { }
