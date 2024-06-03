import { Component } from '@angular/core';
import { PdfService } from '../pdf.service';

@Component({
  selector: 'app-pdf-genration',
  standalone: true,
  imports: [],
  templateUrl: './pdf-genration.component.html',
  styleUrl: './pdf-genration.component.css',
})
export class PdfGenrationComponent {
  constructor(private pdfService: PdfService) {}

  generatePdf() {
    this.pdfService.generatePdf('tableId');
  }
}
