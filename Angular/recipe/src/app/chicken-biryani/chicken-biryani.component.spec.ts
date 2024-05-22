import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenBiryaniComponent } from './chicken-biryani.component';

describe('ChickenBiryaniComponent', () => {
  let component: ChickenBiryaniComponent;
  let fixture: ComponentFixture<ChickenBiryaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChickenBiryaniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChickenBiryaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
