import { TestBed } from '@angular/core/testing';

import { SingleRepoResolverService } from './single-repo-resolver.service';

describe('SingleRepoResolverService', () => {
  let service: SingleRepoResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleRepoResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
