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
    // this.documentService.onPageLoad.next({IsLoad:true,URL:'/assets/Documents/Home/home.md'});
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
  childMenu: any[] = [];
  homePageLoad:boolean=true;

  getMenu() {
    this.documentService.getMenu().subscribe((data:any) => {
       this.menus = data.menus;
       this.childMenu = this.combineChildren(this.menus);

      //  this.menus.map((x:any)=>{
      //   let child :any[] = x.children;
      //   this.childMenu.push(child);
      //   if(child && child.length>0){
      //   child.map((c:any)=>{
      //     this.childMenu.push(c.children); 
      //   });
      // }
      //   return x;
      //  }
      // );
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

  openMdFile(url:any){
    debugger;
    this.homePageLoad =false;
    this.documentService.onPageLoad.next({IsLoad:true,URL:url});
  }
  isload(){
    debugger;
    this.homePageLoad=true;
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

