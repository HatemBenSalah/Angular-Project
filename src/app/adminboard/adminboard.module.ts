import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {AdminBoardRoutingModule} from '../adminboard/adminboard-routing.module';
import { AdminboardComponent } from './adminboard.component';




@NgModule({
  declarations: [AdminboardComponent],
  imports: [AdminBoardRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class AdminBoardModule { }
