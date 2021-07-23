import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginEmployeeComponent} from './login-employee.component';
const routes: Routes = [
    {
      path: '',
      component: LoginEmployeeComponent,
      data: {
        title: 'Simple Login'
      }
    }
  ];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BasicLoginEmployeeRoutingModule { }
  