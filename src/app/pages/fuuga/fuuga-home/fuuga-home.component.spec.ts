import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuugaHomeComponent } from './fuuga-home.component';

describe('FuugaHomeComponent', () => {
  let component: FuugaHomeComponent;
  let fixture: ComponentFixture<FuugaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuugaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuugaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
