import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuugaVoteCandidateComponent } from './fuuga-vote-candidate.component';

describe('FuugaVoteCandidateComponent', () => {
  let component: FuugaVoteCandidateComponent;
  let fixture: ComponentFixture<FuugaVoteCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuugaVoteCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuugaVoteCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
