import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layouts/admin/admin.component';
import {AuthComponent} from './layouts/auth/auth.component';
const routes: Routes = [
  {
    path:'',
    redirectTo: 'auth/registration',
    pathMatch:'full'
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      /*{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },*/
      { 
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }, /*{
        path: 'notifications',
        loadChildren: () => import('./components/advance/notifications/notifications.module').then(m => m.NotificationsModule)
      },*/  {
        path: 'table',
        loadChildren: () => import('./components/tables//basic-bootstrap.module').then(m => m.BasicBootstrapModule),
      }, {
        path: 'map',
        loadChildren: () => import('./map/google-map/google-map.module').then(m => m.GoogleMapModule),
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
    path: '**',
    redirectTo: 'dashboard'
  }
];
/*
const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
]; */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
