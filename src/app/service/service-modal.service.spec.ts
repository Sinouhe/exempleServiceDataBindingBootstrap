import { TestBed } from '@angular/core/testing';

import { ServiceModalService } from './service-modal.service';

describe('ServiceModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceModalService = TestBed.get(ServiceModalService);
    expect(service).toBeTruthy();
  });
});
