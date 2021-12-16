import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuugaVoteCastComponent } from './fuuga-vote-cast.component';

describe('FuugaVoteCastComponent', () => {
  let component: FuugaVoteCastComponent;
  let fixture: ComponentFixture<FuugaVoteCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuugaVoteCastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuugaVoteCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
