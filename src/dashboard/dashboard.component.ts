import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private route:Router ) {
    let data = sessionStorage.getItem("childMenu")!;
    this.childMenu = JSON.parse(data).setTimeout(() => {
    }, 1000);; 
  }
  childMenu: any;
  openTileLink(data:any){
    this.route.navigate([`/Docs/${data.routeUrl}`]);
  }
}
