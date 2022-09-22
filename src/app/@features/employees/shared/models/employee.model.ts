import { DepartmentGroup } from "@features/departments/shared/models/department-group.model";
import { Department } from "@features/departments/shared/models/department.model";

export interface Employee{
  firstName:string;
  middleName:string;
  lastName:string;
  birthDate:Date;
  departmentGroup:DepartmentGroup;
  department:Department;
}
