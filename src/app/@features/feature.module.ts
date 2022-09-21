import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './departments/shared/components';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';

import { SharedModule } from '@shared/shared.module';
import { DepartmentService } from './departments/shared/services/department.service';
import { EmployeeFormComponent } from './employees/employee-form/employee-form.component';
import { DepartmentDropdownService } from './departments/shared/services/department-dropdown.service';



@NgModule({
  declarations: [
    ...fromComponents.components,
    FeatureComponent,
    DepartmentsComponent,
    EmployeesComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule
  ],
  exports:[
    ...fromComponents.components,
  ],
  providers:[
    DepartmentService,
    DepartmentDropdownService
  ]
})
export class FeatureModule { }
