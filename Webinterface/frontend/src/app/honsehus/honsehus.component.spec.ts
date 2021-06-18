import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonsehusComponent } from './honsehus.component';

describe('HonsehusComponent', () => {
  let component: HonsehusComponent;
  let fixture: ComponentFixture<HonsehusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonsehusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HonsehusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
