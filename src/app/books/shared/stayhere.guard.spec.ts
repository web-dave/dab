import { TestBed, async, inject } from '@angular/core/testing';

import { StayhereGuard } from './stayhere.guard';

describe('StayhereGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StayhereGuard]
    });
  });

  it('should ...', inject([StayhereGuard], (guard: StayhereGuard) => {
    expect(guard).toBeTruthy();
  }));
});
