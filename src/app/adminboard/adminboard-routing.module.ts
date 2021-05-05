import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminboardComponent} from './adminboard.component';
const routes: Routes = [
    {
      path: '',
      component: AdminboardComponent
      
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminBoardRoutingModule { }
  