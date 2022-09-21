import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'add', component: EmployeeFormComponent },
  {
    path: 'edit/:id', component: EmployeeListComponent
  },
  { path: 'list', component: EmployeeListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
