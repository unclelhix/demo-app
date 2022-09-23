import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ColumnHeaders } from './models/table-column-headers';
import { PagingConfig } from './models/table-paging-config';
import { TablePagingOnChange } from './models/table-events';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent<T> implements OnInit, TablePagingOnChange {

  @Input() pagingConfig:PagingConfig = {} as PagingConfig;
  @Input() tableSize: number[] = [];
  @Input() dataSource:T[] = [];
  @Input() columnHeaders:ColumnHeaders[] = [];
  @Input() tableName: string = '';
  @Input() link:string = '';
  @Output() onPagingChangeValue = new EventEmitter<PagingConfig>();

  constructor() {}

  ngOnInit() {}

  onTableDataChange(event: any): void {
    this.pagingConfig.currentPage = event;
    this.onPagingChangeValue.emit(this.pagingConfig);
  }

  onTableSizeChange(event: any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.onPagingChangeValue.emit(this.pagingConfig);
  }

}
