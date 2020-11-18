import { TestBed } from '@angular/core/testing';

import { AppInputService } from './app-input.service';

describe('AppInputService', () => {
  let service: AppInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
