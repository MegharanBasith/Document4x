import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Document';
  constructor(private route:Router) {
    let pageLoad = sessionStorage.getItem("isLoggedIn")!;
    if((pageLoad!=null || pageLoad!=undefined) && pageLoad=="true"){
     this.isVisible=true;
    }
    else{
     this.route.navigate(['/Dashboard'])
    }
   }
  ngOnInit(): void {}
  isVisible:boolean = false;
}
