import { Component } from '@angular/core';
import { DocumentServiceService } from '../document-service.service';
import { CommonModule } from '@angular/common';
import { MarkDownLoadComponent } from '../mark-down-load/mark-down-load.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,MarkDownLoadComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  ngOnInit(): void {
    debugger;
    this.getMenu();
  }
  isSubMenuOpen: boolean[] = [];
  constructor(private documentService:DocumentServiceService) {}
  toggleMenu() {
    document.getElementById('sidebar')?.classList.toggle('active');
  }

  toggleSubMenu(index: number) {
    this.isSubMenuOpen[index] = !this.isSubMenuOpen[index];
  }

  htmlContent: string | any = null;
  Directory: any;
  menus: any[] = [];

  getMenu() {
    this.documentService.getMenu().subscribe((data:any) => {
       this.menus = data.menus;
    });
  }

  loadLocation() {
    debugger;
    this.documentService.loadLocation().subscribe((res: any) => {
      this.Directory = res.DocumentLocation;
    });
  }

  openMdFile(url:any){
    debugger;
    this.documentService.onPageLoad.next({IsLoad:true,URL:url});
  }
}
