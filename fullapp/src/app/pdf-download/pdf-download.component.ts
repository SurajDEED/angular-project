import { Component } from '@angular/core';
import { PdfService } from '../pdf.service';

@Component({
  selector: 'app-pdf-download',
  standalone: true,
  imports: [],
  templateUrl: './pdf-download.component.html',
  styleUrl: './pdf-download.component.css'
})
export class PdfDownloadComponent {
  constructor(private pdfService: PdfService) { }

  downloadPdf() {
    this.pdfService.downloadPdf('tableId', 'table_data');
  }
}
