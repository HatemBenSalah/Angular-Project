import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginAdminComponent} from './login-admin.component';
const routes: Routes = [
    {
      path: '',
      component: LoginAdminComponent,
      data: {
        title: 'Simple Login'
      }
    }
  ];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BasicLoginAdminRoutingModule { }
  