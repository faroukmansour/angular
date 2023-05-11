import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideComponent } from './vide/vide.component';
import { CreateVideoComponent } from './create-video/create-video.component';

const routes: Routes = [
  {
    path:'',
    component:VideComponent
  },
  {
    path:'create',
    component:CreateVideoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
