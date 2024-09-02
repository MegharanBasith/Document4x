import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentServiceService } from '../app/document-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private documentService: DocumentServiceService) {}
  @Input() childMenu: any;
  @Output() openMdFile = new EventEmitter<{ data?: boolean }>();
  openTileLink(url:any){
    this.openMdFile.emit({ data:false });
    this.documentService.onPageLoad.next({ IsLoad: true, URL: url });
  }
}
