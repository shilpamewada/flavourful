import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenCurryComponent } from './chicken-curry.component';

describe('ChickenCurryComponent', () => {
  let component: ChickenCurryComponent;
  let fixture: ComponentFixture<ChickenCurryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChickenCurryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChickenCurryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
