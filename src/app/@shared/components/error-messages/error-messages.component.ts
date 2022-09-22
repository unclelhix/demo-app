import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-messages',
  template: `
    <div class="alert alert-danger" *ngIf="requiredFields.length > 0">
    Please fill the required filed(s): <b>{{errorMessages}}</b>
    </div>
  `
})
export class ErrorMessagesComponent implements OnInit {
  @Input() requiredFields: string[] = [];

  constructor() { }

  ngOnInit() {
  }
  get errorMessages(): string{
    return (this.requiredFields.length > 0) ? this.requiredFields.filter((obj)=> obj != undefined).join(", ") : "";
  }
}
