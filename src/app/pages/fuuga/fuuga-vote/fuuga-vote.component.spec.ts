import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuugaVoteComponent } from './fuuga-vote.component';

describe('FuugaVoteComponent', () => {
  let component: FuugaVoteComponent;
  let fixture: ComponentFixture<FuugaVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuugaVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuugaVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
