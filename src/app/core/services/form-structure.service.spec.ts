import { TestBed } from '@angular/core/testing';

import { FormStructureService } from './form-structure.service';

describe('FormStructureService', () => {
  let service: FormStructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormStructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
