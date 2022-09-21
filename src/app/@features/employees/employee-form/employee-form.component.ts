import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartmentGroup } from '@features/departments/shared/models/department-group.model';
import { Department } from '@features/departments/shared/models/department.model';
import { DepartmentDropdownService } from '@features/departments/shared/services/department-dropdown.service';
import { DepartmentService } from '@features/departments/shared/services/department.service';

import { DropDown } from '@shared/models/dropdown.model';
import { debounceTime, map, Observable } from 'rxjs';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  frmEmloyee:FormGroup = {} as FormGroup;

  departments$ = new Observable<Department[]>;
  departmentGroup$ =  new Observable<DepartmentGroup[]>;

  departmentDp:DropDown[] = [];
  departmentGroupDp:DropDown[] = [];

  departmentId: number = 0;
  departmentGroupId: number = 0;

  constructor(private fb: FormBuilder,
    private departmentService: DepartmentService,
    private departmentGroupService: DepartmentDropdownService) { }

  ngOnInit() {

    this.departments$ = this.departmentService
                        .getAllDepartment()
                        .pipe(map(res=>res.data));

    this.departments$.subscribe((result)=>{

      this.departmentDp = result.map(res=>({
        label:res.description,
        value: res
      }));

    });

    this.frmEmloyee = this.fb.group({

    });

  }

  departmentEventHanlder(value: any){

    console.log(value)

    this.departmentGroup$ = this.departmentGroupService
    .getByDepartmentId(Number(value.id)).pipe(map(res => res.data));

    // this.departmentGroupDp = [];

    this.departmentGroup$.subscribe((result)=>{
      console.log(result)
      this.departmentGroupDp = result.map(res=>({
        label:res.description,
        value: res
      }));

    });

  }

  departmentGroupEventHanlder(value: any){
    this.departmentGroupId = value;
  }

}
