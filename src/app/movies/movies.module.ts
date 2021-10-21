import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { MoviesRoutingModule } from './movies-routing.module';
import { AboutComponent } from './about/about.component';
import { ChangeComponent } from './change/change.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutingModule
  ],
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    AboutComponent,
    ChangeComponent
  ]
})
export class MoviesModule {}

