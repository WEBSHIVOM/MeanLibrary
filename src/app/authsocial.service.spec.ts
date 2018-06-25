import { TestBed, inject } from '@angular/core/testing';

import { AuthsocialService } from './authsocial.service';

describe('AuthsocialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthsocialService]
    });
  });

  it('should be created', inject([AuthsocialService], (service: AuthsocialService) => {
    expect(service).toBeTruthy();
  }));
});
