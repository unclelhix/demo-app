import { Injectable } from '@angular/core';
import { BaseServiceRequest } from '@shared.common/BaseServiceRequest';
import { ServiceResponse } from '@shared.common/index';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';
import { Department } from '../models/department.model';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends BaseServiceRequest<Department> {

  protected getUrl: string ='Department/GetAll';
  protected getByIdUrl: string ='Department/GetDepartmentById';
  protected addUrl: string ='Department/AddDepartment';
  protected updateUrl: string ='Department/UpdateDepartment';
  /**
   *
   */
  constructor(protected override restangular: Restangular) {
    super(restangular);
  }

  getAllDepartment(): Observable<ServiceResponse<Department[]>> {
    return this.restangular.one('Department/GetAllDepartment').get();
  }
}
