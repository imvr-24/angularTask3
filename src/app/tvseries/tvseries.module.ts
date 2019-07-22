import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvseriesRoutingModule } from './tvseries-routing.module';
import { TvshowComponent } from './tvshow/tvshow.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TvshowComponent],
  imports: [
    CommonModule,
    TvseriesRoutingModule,
    FormsModule
  ]
})
export class TvseriesModule { }
