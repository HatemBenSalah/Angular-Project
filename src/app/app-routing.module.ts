import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AdminComponent} from './layouts/admin/admin.component';
import {AuthComponent} from './layouts/auth/auth.component';
import {AuthGuard } from './auth/AuthGuard';
import {AdminboardComponent } from './adminboard/adminboard.component';

import { EmployeeboardComponent } from './employeeboard/employeeboard.component';
import { AuthGuardAdmin } from './auth/AuthGuardAdmin';
import { AuthGuardEmployee } from './auth/AuthGuardEmployee';
const routes: Routes = [
  
  {
    path: '',
    component: AdminComponent,
    children: [
     
      { 
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),  canActivate:[AuthGuard],
      }, {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),  canActivate:[AuthGuard],
      },  {
        path: 'table',
        loadChildren: () => import('./components/tables//basic-bootstrap.module').then(m => m.BasicBootstrapModule), canActivate:[AuthGuard],
      }, {
        path: 'map',
        loadChildren: () => import('./map/google-map/google-map.module').then(m => m.GoogleMapModule), canActivate:[AuthGuard],
      },{
        path: '',
        loadChildren: () => import('./profil/profil.module').then(m => m.ProfilModule),

      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
 path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canDeactivate:[AuthGuard],
      }
    ]
  },
  {path: 'admin',
    component: AdminboardComponent,canActivate:[AuthGuardAdmin]
    
  },
  {path: 'employee',
  component: EmployeeboardComponent,canActivate:[AuthGuardEmployee]
  
},
  
  {
    path: '**',
    redirectTo: 'dashboard'
  },
  
   
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
