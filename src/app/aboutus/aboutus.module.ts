import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutusComponent } from './aboutus.component';

@NgModule({
    imports: [
      CommonModule,
      AboutusRoutingModule,
      SharedModule
    ],
    declarations: [
        AboutusComponent,
        

      
   ]
  })
  export class AboutusModule { }
  