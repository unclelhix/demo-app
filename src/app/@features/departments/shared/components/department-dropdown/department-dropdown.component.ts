import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceResponse } from '@shared.common/index';
import { map, Observable, switchMap } from 'rxjs';
import { Department } from '../../models/department.model';

import { DepartmentService } from '../../services/department.service';


@Component({
  selector: 'app-department-dropdown',
  templateUrl: './department-dropdown.component.html',
  styleUrls: ['./department-dropdown.component.css']
})
export class DepartmentDropdownComponent implements OnInit {
  departments$ = new Observable<Department[]>;
  department$:Department = {} as Department;
  @Output() departmentValueChange = new EventEmitter<Department>();

  constructor(private departmentService: DepartmentService) {}

  ngOnInit() {
    this.departments$ = this.departmentService
    .getAllDepartment()
    .pipe(map(res=>res.data));
  }

  onValueChange(value:any){
    this.departmentValueChange.emit(value);
  }
}
