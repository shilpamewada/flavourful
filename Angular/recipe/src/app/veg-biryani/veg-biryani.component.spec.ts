import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegBiryaniComponent } from './veg-biryani.component';

describe('VegBiryaniComponent', () => {
  let component: VegBiryaniComponent;
  let fixture: ComponentFixture<VegBiryaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VegBiryaniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VegBiryaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
