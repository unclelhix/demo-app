import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DepartmentGroup } from '../../models/department-group.model';
import { Department } from '../../models/department.model';
import { DepartmentDropdownService } from '../../services/department-dropdown.service';

@Component({
  selector: 'app-department-group-dropdown',
  templateUrl: './department-group-dropdown.component.html',
  styleUrls: ['./department-group-dropdown.component.css']
})
export class DepartmentGroupDropdownComponent implements OnInit, OnChanges {

  @Input() department: Department = {} as Department;
  @Output() departmentGroupValueChange = new EventEmitter<DepartmentGroup>();

  departmentGroup$: DepartmentGroup = {} as DepartmentGroup;
  departmentGroups$ = new Observable<DepartmentGroup[]>();

  constructor(private departmentGroupService: DepartmentDropdownService) { }

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['department'];
    if (Object.keys(change.currentValue).length > 0){
      this.departmentGroup$ = {} as DepartmentGroup;
      this.departmentGroups$ = this.departmentGroupService
      .getByDepartmentId(Number(change.currentValue.id)).pipe(map(res => res.data));
    }
  }

  ngOnInit() {

  }

  onValueChange(value: any) {
    this.departmentGroupValueChange.emit(value);
  }

}
