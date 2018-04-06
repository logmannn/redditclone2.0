import { TestBed, inject } from '@angular/core/testing';

import { SubRedditService } from './subReddit.service';

describe('SubRedditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubRedditService]
    });
  });

  it('should be created', inject([SubRedditService], (service: SubRedditService) => {
    expect(service).toBeTruthy();
  }));
});
