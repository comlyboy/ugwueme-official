import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuugaVoteCandidatePublicComponent } from './fuuga-vote-candidate-public.component';

describe('FuugaVoteCandidatePublicComponent', () => {
  let component: FuugaVoteCandidatePublicComponent;
  let fixture: ComponentFixture<FuugaVoteCandidatePublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuugaVoteCandidatePublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuugaVoteCandidatePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
