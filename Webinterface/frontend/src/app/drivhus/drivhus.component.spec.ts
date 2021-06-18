import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivhusComponent } from './drivhus.component';

describe('DrivhusComponent', () => {
  let component: DrivhusComponent;
  let fixture: ComponentFixture<DrivhusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivhusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivhusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
