import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvshowComponent } from './tvshow/tvshow.component';


const routes: Routes = [
  {path:"",component:TvshowComponent}
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvseriesRoutingModule { }
