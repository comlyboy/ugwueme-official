import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuugaVoterListComponent } from './fuuga-voter-list.component';

describe('FuugaVoterListComponent', () => {
  let component: FuugaVoterListComponent;
  let fixture: ComponentFixture<FuugaVoterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuugaVoterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuugaVoterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
