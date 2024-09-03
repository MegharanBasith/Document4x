import { Component } from '@angular/core';
import { DocumentServiceService } from '../document-service.service';
import { CommonModule } from '@angular/common';
import { MarkDownLoadComponent } from '../mark-down-load/mark-down-load.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MarkDownLoadComponent, DashboardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  ngOnInit(): void {
    debugger;
    this.getMenu();
  }
  isSubMenuOpen: boolean[] = [];
  Name: any;
  Image: any;
  constructor(
    private documentService: DocumentServiceService,
    private authService: AuthService
  ) {
    this.Name = JSON.parse(sessionStorage.getItem('CurrentUser')!).name;
    this.Image = JSON.parse(sessionStorage.getItem('CurrentUser')!).picture;
  }
  openPanel: boolean = false;
  openRightMenu() {
    this.openPanel = !this.openPanel;
  }

  toggleMenu() {
    document.getElementById('sidebar')?.classList.toggle('active');
  }

  toggleSubMenu(index: number) {
    this.isSubMenuOpen[index] = !this.isSubMenuOpen[index];
  }

  htmlContent: string | any = null;
  Directory: any;
  menus: any[] = [];
  childMenu: any[] = [];
  homePageLoad: boolean = true;

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

  loadLocation() {
    debugger;
    this.documentService.loadLocation().subscribe((res: any) => {
      this.Directory = res.DocumentLocation;
    });
  }

  homePage() {
    this.homePageLoad = false;
  }

  openMdFile(url: any) {
    debugger;
    this.homePage();
    this.documentService.onPageLoad.next({ IsLoad: true, URL: url });
  }
  isload() {
    debugger;
    this.homePageLoad = true;
  }

  signOut() {
    this.openPanel = false;
    sessionStorage.removeItem('CurrentUser');
    this.authService.signOut();
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
