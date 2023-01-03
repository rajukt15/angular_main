import { TestBed } from '@angular/core/testing';

import { MovieContextService } from './movie-context.service';

describe('MovieContextService', () => {
  let service: MovieContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
