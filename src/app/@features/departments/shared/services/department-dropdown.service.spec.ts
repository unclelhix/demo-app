/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DepartmentDropdownService } from './department-dropdown.service';

describe('Service: DepartmentDropdown', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartmentDropdownService]
    });
  });

  it('should ...', inject([DepartmentDropdownService], (service: DepartmentDropdownService) => {
    expect(service).toBeTruthy();
  }));
});
