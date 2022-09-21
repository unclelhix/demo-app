import { DepartmentGroup } from "@features/departments/shared/models/department-group.model";

export interface Employee{
  firstName:string;
  middleName:string;
  lastName:string;
  departmentGroup:DepartmentGroup
}
