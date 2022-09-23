import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, Provider, SimpleChanges } from '@angular/core';
import {  ControlValueAccessor,   NG_VALUE_ACCESSOR } from '@angular/forms';
// import { DropDown } from '@shared/models/dropdown.model';
import { Observable } from 'rxjs';

const DROPDOWN_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
   providers: [DROPDOWN_VALUE_ACCESSOR]
})
export class DropdownComponent<T> implements OnInit, OnChanges, ControlValueAccessor   {

  public item: T = {} as T;
  @Input() items = new  Observable<T[]>;
  @Input() labelFor: string = '';
  @Input() labelText: string = '';
  @Input() placeHolder: string = '';
  @Input() required:boolean = false;
  @Output() itemValueChange = new EventEmitter<any>();

  touched = false;
  disabled = false;

  constructor(){}

  ngOnInit() {

  }

  onTouched = () => {};
  onChange = (obj: T) => {};

  writeValue(obj: T): void {
    this.item = obj;
  }
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }
  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.item = {} as T;
  }
  onValueChange(value: any) {
    this.onTouched(); // <-- mark as touched
    this.onChange(value); // <-- call function to let know of a change
    this.itemValueChange.emit(value);
  }
}
