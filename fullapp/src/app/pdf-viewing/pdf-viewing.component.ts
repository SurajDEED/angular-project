import { Component } from '@angular/core';
import { PdfService } from '../pdf.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pdf-viewing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-viewing.component.html',
  styleUrl: './pdf-viewing.component.css',
})
export class PdfViewingComponent {
  constructor(private pdfService: PdfService) {}
  
  get imageData(): string | null {
    return this.pdfService.imageData;
  }
  viewPdf() {
    this.pdfService.viewPdf('tableId');
  }
}
