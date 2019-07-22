import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then(mod => mod.MoviesModule)
  },
  {
    path: 'tvseries',
    loadChildren: () => import('./tvseries/tvseries.module').then(mod => mod.TvseriesModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
