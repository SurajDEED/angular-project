import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewingComponent } from './pdf-viewing.component';

describe('PdfViewingComponent', () => {
  let component: PdfViewingComponent;
  let fixture: ComponentFixture<PdfViewingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfViewingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
