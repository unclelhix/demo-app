import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCommonModule } from '@shared.common/shared-common.module';
import * as fromComponents from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { RequiredLabelDirective } from './directives/required-label/required-label.directive';
import { ColumnOrderPipe } from './pipes/column-order.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, //Add this for ngModel etc
    ReactiveFormsModule, //reactive forms
    NgxPaginationModule,
    RouterModule,
    FormsModule,
    SharedCommonModule,
    NgSelectModule,
  ],
  declarations: [
    ...fromComponents.components,
    RequiredLabelDirective,
    ColumnOrderPipe
  ],
  exports:[
    ...fromComponents.components,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    RequiredLabelDirective,
    ColumnOrderPipe,
    SharedCommonModule
  ]
})
export class SharedModule { }
