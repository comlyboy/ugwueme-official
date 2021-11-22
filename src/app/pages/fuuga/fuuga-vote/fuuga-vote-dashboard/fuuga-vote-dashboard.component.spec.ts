import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuugaVoteDashboardComponent } from './fuuga-vote-dashboard.component';

describe('FuugaVoteDashboardComponent', () => {
  let component: FuugaVoteDashboardComponent;
  let fixture: ComponentFixture<FuugaVoteDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuugaVoteDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuugaVoteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
