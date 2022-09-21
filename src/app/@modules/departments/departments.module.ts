import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { SharedCommonModule } from '@shared.common/shared-common.module';
import { SharedModule } from '@shared/shared.module';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { DepartmentGroupFormComponent } from './department-group-form/department-group-form.component';


@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentFormComponent,
    DepartmentGroupFormComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    SharedCommonModule,
    SharedModule
  ],
  exports:[

  ]
})
export class DepartmentsModule { }
