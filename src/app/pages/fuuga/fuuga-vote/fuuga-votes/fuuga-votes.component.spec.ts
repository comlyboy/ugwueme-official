import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuugaVotesComponent } from './fuuga-votes.component';

describe('FuugaVotesComponent', () => {
  let component: FuugaVotesComponent;
  let fixture: ComponentFixture<FuugaVotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuugaVotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuugaVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
