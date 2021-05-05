import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/AuthGuard';
import { ProfilComponent } from './profil/profil.component';

import { UserSettingComponent } from './user-setting/user-setting.component';
const routes: Routes = [
  {
    path: 'Profil',
    component: ProfilComponent
    
  },
  {
    path: 'setting',
    component: UserSettingComponent
    
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
