import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuugaVoterRegisterComponent } from './fuuga-voter-register.component';

describe('FuugaVoterRegisterComponent', () => {
  let component: FuugaVoterRegisterComponent;
  let fixture: ComponentFixture<FuugaVoterRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuugaVoterRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuugaVoterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
