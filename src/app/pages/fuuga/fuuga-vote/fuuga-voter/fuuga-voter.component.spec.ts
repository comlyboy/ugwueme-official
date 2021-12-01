import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuugaVoterComponent } from './fuuga-voter.component';

describe('FuugaVoterComponent', () => {
  let component: FuugaVoterComponent;
  let fixture: ComponentFixture<FuugaVoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuugaVoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuugaVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
