import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuugaVoteSettingComponent } from './fuuga-vote-setting.component';

describe('FuugaVoteSettingComponent', () => {
  let component: FuugaVoteSettingComponent;
  let fixture: ComponentFixture<FuugaVoteSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuugaVoteSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuugaVoteSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
