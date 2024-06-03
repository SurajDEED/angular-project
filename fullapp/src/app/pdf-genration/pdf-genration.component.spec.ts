import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfGenrationComponent } from './pdf-genration.component';

describe('PdfGenrationComponent', () => {
  let component: PdfGenrationComponent;
  let fixture: ComponentFixture<PdfGenrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfGenrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfGenrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
