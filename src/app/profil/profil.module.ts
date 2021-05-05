import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';
import {SharedModule} from '../shared/shared.module';
import { ProfilRoutingModule } from './profil-routing.module';
import { UserSettingComponent } from './user-setting/user-setting.component';



@NgModule({
    imports: [
      CommonModule,
      ProfilRoutingModule,
      SharedModule
    ],
    declarations: [
        ProfilComponent,
        UserSettingComponent

      
   ]
  })
  export class ProfilModule { }
  