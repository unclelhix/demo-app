import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropDown } from '@shared/models/dropdown.model';
import { Observable } from 'rxjs';
export interface DropdownItems {
  items?: any;
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  item$: any = {} as any;
  @Input() items = new Observable<any>;
  @Input() dropdownModel = {} as DropDown;
  @Output() itemValueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }
  onValueChange(value: any) {
    this.itemValueChange.emit(value);
  }
}
