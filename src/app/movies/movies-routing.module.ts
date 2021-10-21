import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AboutComponent } from './about/about.component';

const moviesRoutes: Routes = [
  { path: 'movies', redirectTo: '/newmovies' },
  { path: 'movie/:id', redirectTo: '/newmovie/:id' },
  { path: 'newmovies',  component: MovieListComponent, data: { animation: 'movies' } },
  { path: 'newmovie/:id', component: MovieDetailComponent, data: { animation: 'movie' }},
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }

