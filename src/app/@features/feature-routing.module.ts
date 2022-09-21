import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeFormComponent } from './employees/employee-form/employee-form.component';
import { EmployeesComponent } from './employees/employees.component';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  {
    path: '', component: FeatureComponent,
    children: [
      { path: 'employees', component: EmployeesComponent },
      { path: 'employees/add', component: EmployeeFormComponent },
      { path: 'departments', component: DepartmentsComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
