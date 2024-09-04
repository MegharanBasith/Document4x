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
    this.menus = localStorage.getItem(JSON.parse('Menu'));
    this.childMenu = localStorage.getItem(JSON.parse('ChildMenu'));
    if(this.menus.length>0){
      location.reload();
    }
  }
  isSubMenuOpen: boolean[] = [];
  menus:any;
  childMenu:any;
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
  homePageLoad: boolean = true;

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
    this.homePageLoad=false;
    sessionStorage.removeItem('CurrentUser');
    this.authService.signOut();
  }
}

