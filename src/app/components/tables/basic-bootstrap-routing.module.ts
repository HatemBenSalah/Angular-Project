import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandeListComponent } from './commande-list/commande-list.component';
import { CreateCommandeComponent } from './create-commande/create-commande.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateClaimComponent } from './create-Claim/create-Claim.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ClaimListComponent } from './claim-list/Claim-list.component';
const routes: Routes = [
  
  {
    path: 'createCommande',
    component: CreateCommandeComponent,
    data: {
      breadcrumb: '',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Basic Table',
      status: true
    }
  },

  {
    path: 'ListCommande',
    component: CommandeListComponent,
    data: {
      breadcrumb: '',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Basic Table',
      status: true
    }
  },

  {
    path: 'ListClaim',
    component: ClaimListComponent,
    data: {
      breadcrumb: '',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Basic Table',
      status: true
    }
  },
    {
      path: 'createClaim',
      component: CreateClaimComponent,
      data: {
        breadcrumb: '',
        icon: 'icofont-table bg-c-blue',
        breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Basic Table',
        status: true
      }
  },
  {
    path: 'createEmployee',
    component: CreateEmployeeComponent,
    data: {
      breadcrumb: '',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Basic Table',
      status: true
    }
},
  {
    path: 'ListEmployee',
    component: EmployeeListComponent,
    data: {
      breadcrumb: '',
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
