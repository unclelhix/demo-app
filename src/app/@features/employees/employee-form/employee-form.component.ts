import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentGroup } from '@features/departments/shared/models/department-group.model';
import { Department } from '@features/departments/shared/models/department.model';
import { DepartmentDropdownService } from '@features/departments/shared/services/department-dropdown.service';
import { DepartmentService } from '@features/departments/shared/services/department.service';
import { FormController } from '@shared.common/FormControls';
import { RequiredLabelDirective } from '@shared/directives/required-label/required-label.directive';

import { DropDown } from '@shared/models/dropdown.model';
import { debounceTime, map, Observable } from 'rxjs';
import { Employee } from '../shared/models/employee.model';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit, FormController {

  requiredFieldLabels:string[] = [];
  frmEmloyee: FormGroup;
  employee: Employee = {} as Employee;
  departments$ = new Observable<Department[]>;
  departmentGroup$ = new Observable<DepartmentGroup[]>;

  department: Department = {} as Department;
  departmentGroup: DepartmentGroup = {} as DepartmentGroup;

  @ViewChildren(RequiredLabelDirective) requiredFields!: QueryList<RequiredLabelDirective>;

  constructor(
    private fb: FormBuilder,

    private departmentService: DepartmentService,
    private departmentGroupService: DepartmentDropdownService) {

    this.frmEmloyee = this.fb.group({
      firstName: [this.employee ? this.employee.firstName : null, Validators.required],
      middleName: [this.employee ? this.employee.middleName : null],
      lastName: [this.employee ? this.employee.lastName : null, Validators.required],
      birthDate: [this.employee ? this.employee.birthDate : null],
      departmentGroup: [this.employee ? this.employee.departmentGroup : null, Validators.required],
      department: [this.employee ? this.employee.department : null, Validators.required],
    });

  }

  fC(name: string): AbstractControl<any, any> {
    return this.frmEmloyee.get(name)?.value;
  }

  formControl(name:string){
    return this.frmEmloyee.get(name);
  }
  ngOnInit() {

    this.departments$ = this.departmentService
      .getAllDepartment()
      .pipe(debounceTime(500), map(res => res.data));
  }

  onSave(): void {
    if (this.frmEmloyee.valid) {
      console.log(this.frmEmloyee.value)
    }else{
      this.requiredFieldLabels = this.requiredFields.map(x=>x.getRequiredFields(this.frmEmloyee));
      // Object.keys(this.frmEmloyee.controls).forEach((key: string) => {
      //   console.log(key)
      // });
    }
  }

  departmentEventHanlder(value: any) {
    // console.log(value)
    if (value != null) {
      this.department = value;
      this.departmentGroup$ = this.departmentGroupService
        .getByDepartmentId(Number(value.id)).pipe(map(res => res.data));
    }
  }

  departmentGroupEventHanlder(value: any) {
    // console.log(value)
    this.departmentGroup = value;
  }

}
// departmentDp:DropDown[] = [];
// departmentGroupDp:DropDown[] = [];

 // this.departmentGroup$.subscribe((result)=>{
    //   console.log(result)
    //   this.departmentGroupDp = result.map(res=>({
    //     label:res.description,
    //     value: res
    //   }));

    // });

      // this.departments$.subscribe((result)=>{

    //   this.departmentDp = result.map(res=>({
    //     label:res.description,
    //     value: res
    //   }));

    // });
