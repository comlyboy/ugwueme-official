import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuugaDashboardComponent } from './fuuga-dashboard.component';

describe('FuugaDashboardComponent', () => {
  let component: FuugaDashboardComponent;
  let fixture: ComponentFixture<FuugaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuugaDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuugaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
