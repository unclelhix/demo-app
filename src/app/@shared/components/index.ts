import { DropdownComponent } from './dropdown/dropdown.component';
import { ErrorMessagesComponent } from './error-messages/error-messages.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TableComponent } from './table/table.component';

export const components: any[] = [
  MainNavComponent,
  SideNavComponent,
  DropdownComponent,
  ErrorMessagesComponent,
  TableComponent
];

export * from './main-nav/main-nav.component';
export * from './side-nav/side-nav.component';
export * from './dropdown/dropdown.component';
export * from './error-messages/error-messages.component';
export * from './table/table.component';
