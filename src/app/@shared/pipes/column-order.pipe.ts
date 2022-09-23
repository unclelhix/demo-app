import { Pipe, PipeTransform } from '@angular/core';
import { ColumnHeaders } from '@shared/components/table/models';

@Pipe({
  name: 'columnOrder'
})
export class ColumnOrderPipe implements PipeTransform {

  transform(value: any, columns: ColumnHeaders[]): any[] {
    console.log(value);
    console.log(columns);
    return columns.map((c: ColumnHeaders) => value[c.value]);
  }

}
