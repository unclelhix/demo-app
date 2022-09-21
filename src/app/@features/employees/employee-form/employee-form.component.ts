import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartmentGroup } from '@features/departments/shared/models/department-group.model';
import { Department } from '@features/departments/shared/models/department.model';
import { DepartmentDropdownService } from '@features/departments/shared/services/department-dropdown.service';
import { DepartmentService } from '@features/departments/shared/services/department.service';
import { DropdownItems } from '@shared/components';
import { DropDown } from '@shared/models/dropdown.model';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  frmEmloyee:FormGroup = {} as FormGroup;
  department: Department = {} as Department;
  departmentGroup: DepartmentGroup = {} as DepartmentGroup;

  departments$ = new Observable<Department[]>;
  departmentGroup$ =  new Observable<DepartmentGroup[]>;

  departmentModel: DropDown = {
    label: 'Department'
  }
  departmentGroupModel: DropDown = {
    label: 'Department Group'
  }
  constructor(private fb: FormBuilder,
    private departmentService: DepartmentService,
    private departmentGroupService: DepartmentDropdownService) { }

  ngOnInit() {
    this.departments$ = this.departmentService
    .getAllDepartment()
    .pipe(map(res=>res.data));
    this.frmEmloyee = this.fb.group({});
  }
  departmentEventHanlder(value: any){
    console.log(value)
    this.department = value;
    this.departmentGroup$ = this.departmentGroupService
    .getByDepartmentId(Number(value.id)).pipe(map(res => res.data));
  }
  departmentGroupEventHanlder(value: any){
    this.departmentGroup = value;
  }
}
