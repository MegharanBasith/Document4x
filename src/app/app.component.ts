import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Document';
  constructor(private router: Router) {
    // router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     debugger;
    //     if (event.url != '/' && event.url != '' &&JSON.parse(sessionStorage.getItem('CurrentUser')!) != '') 
    //     {
    //       this.router.navigate(['']);
    //     }
    //   }
    // });
  }
  ngOnInit(): void {}
}
