import { Component } from '@angular/core';
import { DocumentServiceService } from '../document-service.service';
import { CommonModule } from '@angular/common';
import { MarkDownLoadComponent } from '../mark-down-load/mark-down-load.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AuthService } from '../../auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MarkDownLoadComponent, DashboardComponent,RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  ngOnInit(): void {
    debugger;
    let data = localStorage.getItem("Reload");
    if(data=="true"){
      localStorage.setItem('Reload',"false");
      location.reload();
    }
    else{
      this.getMenu();
    }
  }
  isSubMenuOpen: boolean[] = [];
  Name: any;
  Image: any;
  constructor(
    private documentService: DocumentServiceService,
    private authService: AuthService,
    private route:Router
  ) {
    this.Name = JSON.parse(sessionStorage.getItem('CurrentUser')!).name;
    this.Image = JSON.parse(sessionStorage.getItem('CurrentUser')!).picture;
  }
  openPanel: boolean = false;
  openRightMenu() {
    this.openPanel = !this.openPanel;
  }
  toggle:boolean=false;
  toggleMenu() {
    this.toggle = !this.toggle;
    const sidebarmini = document.getElementById('bodyDiv') as HTMLElement;
    if (sidebarmini.classList.contains('sidebar-collapse') && sidebarmini.classList.contains('sidebar-closed')) {
      sidebarmini.classList.remove('sidebar-closed');
      sidebarmini.classList.remove('sidebar-collapse');
      sidebarmini.classList.add('sidebar-open');
    }else{
      sidebarmini.classList.remove('sidebar-open');
      sidebarmini.classList.add('sidebar-closed');
      sidebarmini.classList.add('sidebar-collapse');
    }
  }

  toggleSubMenu(index: number) {
    this.isSubMenuOpen[index] = !this.isSubMenuOpen[index];
  }

  htmlContent: string | any = null;
  Directory: any;
  homePageLoad: boolean = true;

  menus: any[] = [];
  childMenu: any[] = [];
  getMenu() {
    this.documentService.getMenu().subscribe((data: any) => {
      this.menus = data.menus;
      this.childMenu = this.combineChildren(this.menus);
      sessionStorage.removeItem("childMenu");
      sessionStorage.setItem("childMenu",JSON.stringify(this.childMenu));
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
  selectedUrl:any=null;
  openMdFile(data: any) {
    debugger;
    this.selectedUrl=data.routeUrl;
    this.toggleMenu();
    this.route.navigate([`/Docs/${data.routeUrl}`]);
  }
  isload() {
    debugger;
    this.toggleMenu();
    this.route.navigate(['/Dashboard'])
  }

  signOut() {
    this.openPanel = false;
    this.homePageLoad=false;
    sessionStorage.removeItem('CurrentUser');
    localStorage.removeItem('Reload');
    sessionStorage.removeItem('isLoggedIn');
    this.authService.signOut();
    this.route.navigate(['/Login']);
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
