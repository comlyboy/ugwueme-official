import { TestBed } from '@angular/core/testing';

import { FuugaVoteService } from './fuuga-vote.service';

describe('FuugaVoteService', () => {
  let service: FuugaVoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuugaVoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
