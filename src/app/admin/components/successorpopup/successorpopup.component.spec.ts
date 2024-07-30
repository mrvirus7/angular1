import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessorpopupComponent } from './successorpopup.component';

describe('SuccessorpopupComponent', () => {
  let component: SuccessorpopupComponent;
  let fixture: ComponentFixture<SuccessorpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessorpopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessorpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
