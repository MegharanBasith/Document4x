import { Component, Input, OnInit } from '@angular/core';
import { marked } from 'marked';
import { DocumentServiceService } from '../document-service.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mark-down-load',
  standalone: true,
  imports: [],
  templateUrl: './mark-down-load.component.html',
  styleUrl: './mark-down-load.component.scss',
})
export class MarkDownLoadComponent {
  constructor(
    private documentService: DocumentServiceService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {}
  params: Subscription | undefined;
  ngOnInit(): void {
    this.params = this.route.paramMap.subscribe((res) => {
      if (res.get('routeUrl')) {
        this.routeUrl = res.get('routeUrl');
        this.loadData();
      }
    });
  }

  loadData() {
    if (this.routeUrl) {
      const routingData = sessionStorage.getItem('childMenu');
      
      if (routingData) {
        let data = JSON.parse(routingData);
        let filteredMenuData = data.filter((x: any) => x.routeUrl === this.routeUrl);
        if (filteredMenuData.length > 0) {
          this.loadMarkdown(filteredMenuData[0].url);
        } else {
          console.error('No data found for the routeUrl:', this.routeUrl);
        }
      } else {
        console.error('No data found in sessionStorage');
      }
    }
  }

  ngOnDestroy(): void {
    if (this.params) {
      this.params.unsubscribe();
    }
  }

  public modifiedHtml: SafeHtml | undefined;

  isDataLoaded: boolean = false;
  innerHTML: any;
  routeUrl: any;
  loadMarkdown(url: any) {
    this.documentService.loadMarkDown(url).subscribe(
      (markdownContent: any) => {
        this.innerHTML = marked.parse(markdownContent);
        this.modifiedHtml = this.sanitizeHtml(
          this.addIdsToElements(this.innerHTML)
        );
        this.isDataLoaded = true;
      },
      (error) => {
        console.error('Error fetching Markdown file:', error);
        this.isDataLoaded = false;
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
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, ''); // Remove any special characters
  }

  // Sanitize the HTML before rendering it in the template
  sanitizeHtml(html: string): SafeHtml {
    debugger;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}



