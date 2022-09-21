import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartmentGroup } from '@features/departments/shared/models/department-group.model';
import { Department } from '@features/departments/shared/models/department.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  frmEmloyee:FormGroup = {} as FormGroup;
  department: Department = {} as Department;
  departmentGroup: DepartmentGroup = {} as DepartmentGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.frmEmloyee = this.fb.group({});
  }
  departmentEventHanlder(value: any){
    console.log(value)
    this.department = value;
  }

  departmentDropdownEventHanlder(value: any){
    this.departmentGroup = value;
  }
}
