import { Injectable } from '@angular/core';
import { BaseServiceRequest } from '@shared.common/BaseServiceRequest';
import { PagingRequest, PagingResponse, PagingResponseBody, ServiceResponse } from '@shared.common/index';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseServiceRequest<Employee> {

  protected getUrl: string ='EmployeeAPI/GetAll';
  protected getByIdUrl: string ='EmployeeAPI/GetEmployeentById';
  protected addUrl: string ='EmployeeAPI/AddEmployee';
  protected updateUrl: string ='EmployeeAPI/UpdateEmployee';
  /**
   *
   */
  constructor(protected override restangular: Restangular) {
    super(restangular);
  }

  getAllEmployeesPaging(request: PagingRequest): Observable<PagingResponseBody<Employee[]>> {
    return this.restangular.one('EmployeeAPI/GetAllEmployees').get(request);
  }
}
