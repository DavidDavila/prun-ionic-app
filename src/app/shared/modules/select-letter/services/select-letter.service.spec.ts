import { TestBed } from '@angular/core/testing';

import { SelectLetterService } from './select-letter.service';

describe('SelectLetterService', () => {
  let service: SelectLetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectLetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
