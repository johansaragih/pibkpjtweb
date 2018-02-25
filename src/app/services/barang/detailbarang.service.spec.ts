import { TestBed, inject } from '@angular/core/testing';

import { DetailbarangService } from './detailbarang.service';

describe('DetailbarangService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailbarangService]
    });
  });

  it('should be created', inject([DetailbarangService], (service: DetailbarangService) => {
    expect(service).toBeTruthy();
  }));
});
