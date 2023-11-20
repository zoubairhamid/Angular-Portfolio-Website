import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent {
  openPanels: { [key: string]: boolean } = {};

  constructor(private titleService: Title) {
    this.titleService.setTitle('Zoubair Hamid - Resume');
  }

  togglePanel(panelName: string) {
    this.openPanels[panelName] = !this.isPanelOpen(panelName);
  }

  isPanelOpen(panelName: string): boolean {
    return this.openPanels[panelName];
  }

  downloadPDF() {
    const pdfUrl = 'assets/resume.pdf';

    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'resume.pdf';
    a.style.display = 'none';

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
  }
}