import { Component, Input, OnInit } from '@angular/core';
import { marked } from 'marked';
import { DocumentServiceService } from '../document-service.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'mark-down-load',
  standalone: true,
  imports: [],
  templateUrl: './mark-down-load.component.html',
  styleUrl: './mark-down-load.component.scss',
})
export class MarkDownLoadComponent {
  constructor(private documentService: DocumentServiceService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    debugger;
    this.documentService.onPageLoad.subscribe((x: any) => {
      this.assetsURL = x.URL;
        this.loadMarkdown(this.assetsURL);
    });
  }

  public modifiedHtml: SafeHtml | undefined;

  isDataLoaded:boolean =false;
  assetsURL: any;
  innerHTML: any;
  loadMarkdown(url: any) {
    this.documentService.loadMarkDown(url).subscribe(
      (markdownContent: any) => {
        this.innerHTML = marked.parse(markdownContent);
        this.modifiedHtml = this.sanitizeHtml(this.addIdsToElements(this.innerHTML));
        this.isDataLoaded=true;
      },
      (error) => {
        console.error('Error fetching Markdown file:', error);
        this.isDataLoaded=false;
      }
    );
  }


   // Function to add ids to elements based on inner HTML text
   addIdsToElements(html: string): string {
    debugger;
    // Parse the HTML string into a DOM structure
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Find all <strong> elements (or any other elements you need)
    const elements = doc.querySelectorAll('strong, h1, h2, h3');

    elements.forEach((el) => {
      const innerText = el.textContent?.trim() ?? '';
      const id = this.generateId(innerText);
      if (id) {
        el.setAttribute('id', id);
      }
    });

    // Serialize the DOM back to a string
    return doc.body.innerHTML;
  }

  // Function to generate ID from the inner text
  generateId(text: string): string {
    debugger;
    return text
      .toLowerCase()             // Convert to lowercase
      .replace(/\s+/g, '-')      // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, ''); // Remove any special characters
  }

  // Sanitize the HTML before rendering it in the template
  sanitizeHtml(html: string): SafeHtml {
    debugger;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}



