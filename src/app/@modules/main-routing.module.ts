import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'departments', loadChildren: () => import('../@modules/departments/departments.module').then(m => m.DepartmentsModule) },
  { path: 'dashboard', loadChildren: () => import('../@modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'employees', loadChildren: () => import('../@modules/employees/employees.module').then(m => m.EmployeesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
