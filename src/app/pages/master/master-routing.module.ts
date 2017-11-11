import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MasterComponent} from './master-component';
import {MasterCompaniesComponent} from './companies/master-companies.component';


const routes: Routes = [{
  path: '',
  component: MasterComponent,
  children: [{
    path: 'companies',
    component: MasterCompaniesComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule { }

export const routedComponents = [
  MasterComponent,
  MasterCompaniesComponent,
];
