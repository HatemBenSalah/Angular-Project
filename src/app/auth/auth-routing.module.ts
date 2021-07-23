import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard } from '../AuthGard/AuthGuard';
import { AuthModule } from './auth.module';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Authentication',
      status: false
    },
    children: [
     
      {
        path: 'login',
        loadChildren: () => import('./login/basic-login/basic-login.module').then(m => m.BasicLoginModule) 
      },
      {
        path: 'registration',
        loadChildren: () => import('./registration/basic-reg/basic-reg.module').then(m => m.BasicRegModule),
      },
      {
        path: 'loginadmin',
        loadChildren: () => import('./login-admin/basic-loginadmin.module').then(m => m.BasicLoginAdminModule),
      },
      {
        path: 'loginemployee',
        loadChildren: () => import('./login-employee/basic-loginemployee.module').then(m => m.BasicLoginEmployeeModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
