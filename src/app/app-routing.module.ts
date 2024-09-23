import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MarkDownLoadComponent } from './mark-down-load/mark-down-load.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: 'Docs/:routeUrl', component: MarkDownLoadComponent },
      { path: 'Dashboard', component: DashboardComponent },
    ],
  },
  { path: '/Login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
