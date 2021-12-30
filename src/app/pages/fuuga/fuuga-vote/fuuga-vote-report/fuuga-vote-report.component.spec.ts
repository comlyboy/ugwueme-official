import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuugaVoteReportComponent } from './fuuga-vote-report.component';

describe('FuugaVoteReportComponent', () => {
  let component: FuugaVoteReportComponent;
  let fixture: ComponentFixture<FuugaVoteReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuugaVoteReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuugaVoteReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
