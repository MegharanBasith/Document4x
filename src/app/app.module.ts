import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { MarkDownLoadComponent } from "./mark-down-load/mark-down-load.component";
import { MenuComponent } from "./menu/menu.component";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    MarkDownLoadComponent,
    MenuComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
