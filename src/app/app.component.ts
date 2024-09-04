import { Component, inject, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { DocumentServiceService } from './document-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Document';
  constructor() {}
  ngOnInit(): void {
    this.getMenu();
    localStorage.setItem('Menu', JSON.stringify(this.menus)!);
    localStorage.setItem('ChildMenu', JSON.stringify(this.childMenu)!);
  }
  private documentService = inject(DocumentServiceService);
  menus: any[] = [];
  childMenu: any[] = [];
  getMenu() {
    this.documentService.getMenu().subscribe((data: any) => {
      this.menus = data.menus;
      this.childMenu = this.combineChildren(this.menus);
      console.log(this.childMenu);
    });
  }

  combineChildren(menus: MenuItem[]): ChildItem[] {
    return menus.reduce((acc, menu) => {
      if (menu.children && menu.children.length > 0) {
        acc = acc.concat(menu.children);
      }
      return acc;
    }, [] as ChildItem[]);
  }
}

interface MenuItem {
  title: string;
  icon?: string;
  children?: ChildItem[];
}

interface ChildItem {
  title: string;
  url: string;
  image: string;
}
