import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicBootstrapComponent} from './basic-bootstrap.component';
import { CommandeListComponent } from './commande-list/commande-list.component';
import { CreateCommandeComponent } from './create-commande/create-commande.component';

const routes: Routes = [
  {
    path: '',
    component: CommandeListComponent,
    data: {
      breadcrumb: 'list',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Basic Table',
      status: true
    }
  },
  {
    path: 'create',
    component: CreateCommandeComponent,
    data: {
      breadcrumb: 'create',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Basic Table',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicBootstrapRoutingModule { }
