import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { SharedCommonModule } from '@shared.common/shared-common.module';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedModule } from '@shared/shared.module';
import { DepartmentsModule } from '../departments/departments.module';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeFormComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedCommonModule,
    SharedModule,
    DepartmentsModule
  ],
  exports:[

  ]
})
export class EmployeesModule { }
