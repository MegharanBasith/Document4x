import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkDownLoadComponent } from './mark-down-load/mark-down-load.component';

const routes: Routes = [{ path: '', component: MarkDownLoadComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
