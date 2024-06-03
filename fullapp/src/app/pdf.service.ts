import { Injectable } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
// import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() {}
  imageData: string | null = null;

  generatePdf(tableId: string) {
    const doc = new jspdf();
    const element = document.getElementById(tableId);
    if (!element) {
      console.error(`Element with ID ${tableId} not found`);
      return;
    }
    html2canvas(element, { scale: 2, useCORS: true }).then((canvas) => {
      const imageData = canvas.toDataURL('image/png');
      const imgWidth = 210; // Width in mm (A4 paper size)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      console.log(imageData);
      doc.addImage(imageData, 'PNG', 0, 0, imgWidth, imgHeight);
      const pdfBlob = doc.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Open the PDF in a new browser tab
      window.open(pdfUrl);
    });
  }

  downloadPdf(tableId: string, fileName: string) {
    const doc = new jspdf();
    const element = document.getElementById(tableId);
    if (!element) {
      console.error(`Element with ID ${tableId} not found`);
      return;
    }
    html2canvas(element).then((canvas) => {
      const imageData = canvas.toDataURL('image/png');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      doc.addImage(imageData, 'PNG', 0, 0, imgWidth, imgHeight);
      doc.save(fileName + '.pdf');
    });
  }

  viewPdf(tableId: string) {
    const doc = new jspdf();
    const element = document.getElementById(tableId);
    if (!element) {
      console.error(`Element with ID ${tableId} not found`);
      return;
    }
    html2canvas(element).then((canvas) => {
      this.imageData = canvas.toDataURL('image/png');

    });
  }
}
