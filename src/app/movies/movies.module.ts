import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieshowComponent } from './movieshow/movieshow.component';
import {FormsModule} from '@angular/forms'
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MovieshowComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MoviesModule { }
