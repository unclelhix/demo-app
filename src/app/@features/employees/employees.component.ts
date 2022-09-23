import { Component, OnInit } from '@angular/core';
import { PagingRequest } from '@shared.common/index';
import { PagingConfig } from '@shared/components/table/models';
import { ColumnHeaders } from '@shared/components/table/models/table-column-headers';
import { ColumnType } from '@shared/enums/column-type';
import { map, Observable } from 'rxjs';
import { Employee } from './shared/models/employee.model';
import { EmployeeService } from './shared/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  pagingConfig: PagingConfig = {} as PagingConfig;
  tableSize = [10, 20, 30, 50];
  dataSource: Employee[] = [];
  columnHeaders: ColumnHeaders[] = [
    {
      name: 'Employee Number',
      value: 'employeeNumber'
    },
    {
      name: 'First Name',
      value: 'firstName'
    },
    {
      name: 'Last Name',
      value: 'lastName'
    },
    {
      name: 'Birth Date',
      value: 'birthDate'
    }

  ]
  constructor(private employeeService: EmployeeService) {

    this.pagingConfig = {
      currentPage: 1,
      totalItems: 0,
      itemsPerPage: 1
    }

    let paging: PagingRequest = {
      itemsPerPage: this.pagingConfig.itemsPerPage,
      currentPage: this.pagingConfig.currentPage,
    }

    this.getEmployees(paging);
  }

  ngOnInit() {

  }

  employeePagingEventHandler(value: any){

    console.log(value);

    let paging: PagingRequest = {
      itemsPerPage: value.itemsPerPage,
      currentPage: value.currentPage
    }

    this.getEmployees(paging);
  }

  getEmployees(paging: PagingRequest){

    // this.employeeService.getAllEmployeesPaging(paging).pipe(
    //   map(res => res) // or any other operator
    // ).subscribe(res => {
    //   console.log(res)
    //   this.dataSource = res.data;
    //   this.pagingConfig.totalItems = Number(res.totalItems);
    // });

    this.employeeService.getAllEmployeesPaging(paging).subscribe((result)=>{
      console.log(result)
      this.pagingConfig.totalItems = Number(result.totalItems);
      this.dataSource = result.data;
    });
    console.log(this.pagingConfig)
  }

}
