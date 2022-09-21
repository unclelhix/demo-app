import { Injectable } from '@angular/core';
import { BaseServiceRequest } from '@shared.common/BaseServiceRequest';
import { ServiceResponse } from '@shared.common/index';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';
import { DepartmentGroup } from '../models/department-group.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentDropdownService extends BaseServiceRequest<DepartmentGroup> {

  protected getUrl: string ='DepartmentGroup/GetAll';
  protected getByIdUrl: string ='DepartmentGroup/GetDepartmentGroupById';
  protected addUrl: string ='DepartmentGroup/AddDepartmentGroup';
  protected updateUrl: string ='DepartmentGroup/UpdateDepartmentGroup';
  /**
   *
   */
  constructor(protected override restangular: Restangular) {
    super(restangular);
  }

  getByDepartmentId(id:number): Observable<ServiceResponse<DepartmentGroup[]>> {
    return this.restangular.all('DepartmentGroup/GetByDepartmentId').get(id);
  }
}
