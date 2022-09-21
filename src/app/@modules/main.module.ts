import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedCommonModule } from '@shared.common/shared-common.module';
import { SharedModule } from '@shared/shared.module';
import { EmployeesModule } from './employees/employees.module';
import { DepartmentsModule } from './departments/departments.module';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    SharedCommonModule,
    EmployeesModule,
    DepartmentsModule,
    DashboardModule
  ],
  exports:[

  ]
})
export class MainModule { }
