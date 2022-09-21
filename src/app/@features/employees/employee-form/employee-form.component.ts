import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  frmEmloyee:FormGroup = {} as FormGroup;
  departmentId: number = 0;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.frmEmloyee = this.fb.group({});
  }
  departmentEventHanlder(value: any){
    console.log(value)
    this.departmentId = value.id;
  }
}
