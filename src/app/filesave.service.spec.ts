import { TestBed } from '@angular/core/testing';

import { FilesaveService } from './filesave.service';

describe('FilesaveService', () => {
  let service: FilesaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
